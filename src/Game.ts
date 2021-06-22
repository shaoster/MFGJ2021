import { Game } from 'boardgame.io';

export interface Part {
  sample: string;
  steps: Array<boolean>;
};

export interface GameState {
  playerParts: Array<Part>;
  targetParts: Array<Part>;
}