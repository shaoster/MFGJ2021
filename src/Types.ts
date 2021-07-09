/**
 * This represents the top-level data model of the game.
 * Any concept of global consequence should be declared (but not implemented) here.
 * Because the compiler can traverse the dependency graph just fine, the order of declaration
 * should be for human consumption.
 * Thus, top level concepts are presented first, and their dependencies are declared later.
 */


////////////////////////////////
// Puzzle Configuration

export interface Puzzle {
  albumIndex: number;
  title: string;
  description: Array<string>;
  levelTrack: string;
  // Override the usually constant length of the track.
  overrideTrackBars?: number;
  // Override the usually constant bpm.
  overrideBPM?: number;
  // The musical composition the player is aiming to replicate.
  targetParts: Array<Part>;
  // The cards you start with in your hand.
  startingHand: Array<CardId>;
  // Any initial state that cannot be removed.
  startingSchedule: Array<CardId>;
  // Any dialog prior to cards being scheduled.
  hints?: Array<string>;
}

export interface Part {
  sample: string;
  steps: StepSequence;
};

export type StepSequence = Array<StepState>;

export enum StepState {
  OFF = 0,
  ON = 1,
  ACCENT = 2,
};

//////////////////////////////////////////////////////////
// Gameplay State (i.e. when trying to solve the puzzle)

// Keep this serializable for easy state management.
export interface GameState extends Puzzle {
  // The player's current parts.
  playerParts: Array<Part>;
  // The player's current hand.
  playerHand: Array<CardId>;
  // The player's current schedule.
  playerSchedule: Array<CardId>;
  // Whether the player has unlocked the next level.
  hasClearedLevel: boolean;
}

// The card identifier is just a string for now. This keeps things serializable.
export type CardId = string;

//////////////////////////////////////////////////////////
// Card Concepts

export interface CardFlavor {
  title: string;
  description: string;
  image?: string;
};

export interface Card extends CardFlavor {
  // Pattern cards have special UI considerations.
  sampleTarget?: string;
  pattern?: Pattern;
  playCard: CardAction;
};

export type Pattern = Array<StepAction>;

export enum StepAction {
  INCREMENT,
  DECREMENT,
  ZERO,
  MAX,
  SHIFT_UP,
  SHIFT_RIGHT,
  SHIFT_DOWN,
  SHIFT_LEFT,
  IGNORE,
};

export type CardAction = (G: GameState) => void;

//////////////////////////////////////////////////////////
// UX potpourri

export interface Tutorial {
  key: string,
  textMarkdown: string,
}

export interface DialogEntry {
  speaker: string,
  text: string,
}