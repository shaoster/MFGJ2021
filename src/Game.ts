import { Ctx, Game } from 'boardgame.io';

import Puzzles from './Puzzles';
import Cards from './Cards';

import { STEP_COUNT } from './Constants';
import { GameState, Part, StepSequence, StepState } from './Types';
import { INVALID_MOVE } from 'boardgame.io/core';


export const FLIP:string = "flip";

const EmptyPart: () => StepSequence = () => Array.from({length: STEP_COUNT}, () => StepState.OFF);

const SetupTurn = (turn: number) => {
  const puzzle = Puzzles[turn - 1];
  const playerParts: Array<Part> = puzzle.targetParts.map(
    (part: Part) => ({
      sample: part.sample,
      steps: EmptyPart()
    })
  );
  const newG = {
    // TBD: Start empty for now.
    levelTitle: puzzle.title,
    playerParts,
    targetParts: [...puzzle.targetParts],
    playerHand: [...puzzle.startingHand],
    playerSchedule: [...(puzzle.playerSchedule ?? [])],
    // Initially there are no active parts.
    activePart: null,
    unremovable: puzzle.playerSchedule?.length ?? 0,
  };
  // Apply any fixed cards.
  (puzzle.playerSchedule ?? []).forEach((cardId) => Cards[cardId].playCard(newG))
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
      card.playCard(G); 
      // Remove the played card.
      G.playerHand.splice(handSlot, 1);
      // Add it to the play stack.
      G.playerSchedule.push(cardId);
    },
    removeCard: (G: GameState, ctx: Ctx, playerScheduleSlot: number) => {
      if (playerScheduleSlot < G.unremovable) {
        return INVALID_MOVE;
      }
      // Reset the turn and re-apply the cards in sequence. 
      const cleanState: GameState = SetupTurn(ctx.turn);
      
      // Add the removed card back to the hand.
      cleanState.playerHand = [...G.playerHand];
      const removedCardId = G.playerSchedule[playerScheduleSlot];
      cleanState.playerHand.push(removedCardId);

      // Re-play the remaining cards.
      for (const [replayedCardIndex, replayedCardId] of G.playerSchedule.entries()) {
        if (replayedCardIndex === playerScheduleSlot || replayedCardIndex < G.unremovable) {
          // Ignore this removed card.
          continue;
        }
        const replayedCard = Cards[replayedCardId];
        console.log(cleanState);
        replayedCard.playCard(cleanState);
        console.log(cleanState);
        cleanState.playerSchedule.push(replayedCardId);
      }
      return cleanState;
    },
    commitSchedule: (G: GameState, ctx: Ctx) => {
      if (CheckLevelComplete(G)) {
        ctx.events?.endTurn?.();
      }
    },
  },
  turn: {
    onBegin: (G: GameState, ctx: Ctx) => SetupTurn(ctx.turn)
  }
};