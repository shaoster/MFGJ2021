import { Ctx, Game } from 'boardgame.io';

import Puzzles from './Puzzles';
import Cards from './Cards';

import { STEP_COUNT } from './Constants';
import { GameState, Part, StepSequence, StepState } from './Types';


export const FLIP:string = "flip";

const EmptyPart: () => StepSequence = () => Array.from({length: STEP_COUNT}, () => StepState.OFF);

const SetupTurn = (level: number) => {
  const puzzle = Puzzles[level];
  const playerParts: Array<Part> = puzzle.targetParts.map(
    (part: Part) => ({
      sample: part.sample,
      steps: EmptyPart()
    })
  );
  return {
    ...puzzle,
    // TBD: Start empty for now.
    playerParts,
    playerHand: [],
    playerSchedule: [],
    // Initially there are no active parts.
    activePart: null,
  }
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
      // Reset the turn and re-apply the cards in sequence. 
      const cleanState: GameState = SetupTurn(ctx.turn);
      
      // Add the removed card back to the hand.
      cleanState.playerHand = [...G.playerHand];
      const removedCardId = G.playerHand[playerScheduleSlot];
      cleanState.playerHand.push(removedCardId);

      // Re-play the remaining cards.
      for (const [replayedCardIndex, replayedCardId] of G.playerSchedule.entries()) {
        if (replayedCardIndex === playerScheduleSlot) {
          // Ignore this removed card.
          continue;
        }
        const card = Cards[replayedCardId];
        card.playCard(cleanState);
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