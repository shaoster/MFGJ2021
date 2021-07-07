import { Ctx, Game } from 'boardgame.io';

import Puzzles from './Puzzles';
import Cards from './Cards';

import { STEP_COUNT } from './Constants';
import { GameState, Part, StepSequence, StepState } from './Types';
import { INVALID_MOVE } from 'boardgame.io/core';
import { reverse } from 'lodash';


export const FLIP:string = "flip";

const EmptyPart: () => StepSequence = () => Array.from({length: STEP_COUNT}, () => StepState.OFF);

const SetupTurn = (turn: number, oldG?: GameState) => {
  const puzzle = Puzzles[turn - 1];
  const playerParts: Array<Part> = puzzle.targetParts.map(
    (part: Part) => ({
      sample: part.sample,
      steps: EmptyPart()
    })
  );
  const newG = {
    // Immutable stuff.
    ...puzzle,
    // Changing stuff.
    playerParts,
    playerHand: [...puzzle.startingHand],
    playerSchedule: [...(puzzle.startingSchedule ?? [])],
    hasClearedLevel: oldG?.hasClearedLevel ?? false,
  };
  // Apply any fixed cards.
  (puzzle.startingSchedule ?? []).forEach((cardId) => Cards[cardId].playCard(newG))
  return newG;
}

export const CheckLevelComplete: (G: GameState) => boolean = (G: GameState) => {
  for (const [targetPartIndex, targetPart] of G.targetParts.entries()) {
    const currentPart = G.playerParts[targetPartIndex];
    for (let i: number = 0; i < STEP_COUNT; i++) {
      if (currentPart.steps[i] !== targetPart.steps[i]) {
        return false;
      }
    }
  }
  return true;
}

export const MyGame: Game = {
  moves: {
    playCard: (G: GameState, ctx: Ctx, handSlot: number) => {
      const cardId = G.playerHand[handSlot];
      const card = Cards[cardId];
      if (!card) {
        return INVALID_MOVE;
      }
      card.playCard(G); 
      // Remove the played card.
      G.playerHand.splice(handSlot, 1);
      // Add it to the play stack.
      G.playerSchedule.unshift(cardId);
      if (CheckLevelComplete(G)) {
        G.hasClearedLevel = true;
      }
    },
    removeCard: (G: GameState, ctx: Ctx, playerScheduleSlot: number) => {
      if (G.playerSchedule.length - playerScheduleSlot <= G.startingSchedule.length) {
        return INVALID_MOVE;
      }

      const removedCardId = G.playerSchedule[playerScheduleSlot];
      if (!removedCardId) {
        return INVALID_MOVE;
      }

      // Reset the turn and re-apply the cards in sequence. 
      const cleanState: GameState = SetupTurn(ctx.turn, G);
      
      // Add the removed card back to the hand.
      cleanState.playerHand = [...G.playerHand];
      cleanState.playerHand.unshift(removedCardId);

      const inOrderStack = reverse([...G.playerSchedule]);
      console.log(inOrderStack);
      // Re-play the remaining cards in stack order.
      for (const [replayedCardIndex, replayedCardId] of inOrderStack.entries()) {
        if (G.playerSchedule.length - replayedCardIndex - 1 === playerScheduleSlot) {
          // Ignore this removed card.
          // We need to use the original index.
          continue;
        }
        if (replayedCardIndex < G.startingSchedule.length) {
          // Not removable...
          continue;
        }
        const replayedCard = Cards[replayedCardId];
        replayedCard.playCard(cleanState);
        cleanState.playerSchedule.unshift(replayedCardId);
      }
      if (CheckLevelComplete(cleanState)) {
        G.hasClearedLevel = true;
      }
      return cleanState;
    },
    clearSchedule: (G: GameState, ctx: Ctx) => {
      if (CheckLevelComplete(G)) {
        G.hasClearedLevel = true;
      }
      return SetupTurn(ctx.turn, G);
    },
    commitSchedule: (G: GameState, ctx: Ctx) => {
      if (G.hasClearedLevel) {
        ctx.events?.endTurn?.();
      }
    },
  },
  turn: {
    onBegin: (G: GameState, ctx: Ctx) => SetupTurn(ctx.turn)
  }
};