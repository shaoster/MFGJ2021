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
  title: string;
  // The musical composition the player is aiming to replicate.
  targetParts: Array<Part>;
  // The 
  startingHand: Array<CardId>;
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
export interface GameState {
  playerParts: Array<Part>;
  targetParts: Array<Part>;
  // The set of cards the player can choose from.
  playerHand: Array<CardId>;
  // The sequence of cards the player has chosen to play.
  playerSchedule: Array<CardId>;
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
  SET_ACCENTED,
  SET_ON,
  SET_OFF,
  IGNORE,
};

export type CardAction = (G: GameState) => void;