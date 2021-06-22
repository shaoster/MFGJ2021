import { Ctx, Game } from 'boardgame.io';

export interface Part {
  sample: string;
  steps: Array<boolean>;
};

export interface GameState {
  playerParts: Array<Part>;
  targetParts: Array<Part>;
  playerHand: Array<string>;
  currentCard: number;
}

export const FLIP:string = "flip";

export const MyGame: Game = {
  setup: () => ({
    playerParts: [
      {
        sample: "sd",
        steps: [
          false, false, false, false,
          true, false, false, false,
          false, false, false, false,
          true, false, false, false,
        ],
      },
      {
        sample: "bd",
        steps: [
          true, false, false, false,
          false, false, false, false,
          true, false, false, false,
          false, false, false, false,
        ],
      },
      {
        sample: "ch",
        steps: [
          true, false, true, false,
          true, false, true, false,
          true, false, true, false,
          true, false, true, false,
        ],
      },
    ],
    targetParts: [
      {
        sample: "sd",
        steps: [
          false, false, false, false,
          true, false, false, false,
          false, false, false, false,
          true, false, false, false,
        ],
      },
      {
        sample: "bd",
        steps: [
          true, false, false, false,
          false, false, false, false,
          true, false, false, false,
          false, false, false, false,
        ],
      },
      {
        sample: "ch",
        steps: [
          true, false, true, false,
          true, false, true, false,
          true, false, true, false,
          true, false, true, true,
        ],
      },
    ],
    playerHand: [
     FLIP,
     FLIP,
     FLIP,
     FLIP, 
    ],
    currentCard: null,
  }),
  moves: {
    playCard: (G, ctx: Ctx, handSlot) => {
      const card = G.playerHand[handSlot];
      switch (card) {
        case FLIP: {
          G.currentCard = handSlot;
          ctx.events?.setStage?.({ stage: 'chooseFlipTarget', moveLimit: 1 });
        } break;
        default: {
          throw Error(`Unrecognized card: ${card}`);
        }
      }
    },
  },
  turn: {
    stages: {
      chooseFlipTarget: {
        moves: {
          chooseTarget: (G, ctx, partId, stepId) => {
            // TODO: More abstraction...
            G.playerParts[partId].steps[stepId] = !G.playerParts[partId].steps[stepId];
            G.playerHand.splice(G.currentCard, 1);
            G.currentCard = null;
          },
          cancel: (G, ctx) => {
            // Burn the move.
            G.currentCard = null;
          }
        },
      },
    }
  }
};