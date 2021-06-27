import { Card, CardFlavor, GameState, Part, Pattern, StepAction, StepState } from "./Types";

// Separate from CardImpl, for UI/preview purposes.
export const ApplyPatternToPart: (pattern: Pattern, part: Part) => void = (pattern, part) => {
  for (const [stepIndex, stepAction] of pattern.entries()) {
    switch (stepAction) {
      case StepAction.SET_ACCENTED:
        part.steps[stepIndex] = StepState.ACCENT;
        break;
      case StepAction.SET_ON:
        part.steps[stepIndex] = StepState.ON;
        break;
      case StepAction.SET_OFF:
        part.steps[stepIndex] = StepState.OFF;
        break;
      default:
        continue;
    }
  }
}

class CardImpl implements Card {
  title: string;
  description: string;
  image?: string;
  sampleTarget: string;
  pattern?: Pattern;

  constructor(flavor: CardFlavor, pattern: Pattern, part: string) {
    this.title = flavor.title;
    this.description = flavor.description;
    this.image = flavor.image;
    this.sampleTarget = part;
  }

  playCard(G: GameState) {
    for (const part of G.playerParts) {
      if (part.sample !== this.sampleTarget) {
        continue;
      }
      if (this.pattern) {
        ApplyPatternToPart(this.pattern, part);
      }
    }
  }
}

const Cards : {[key: string]: Card} = {
};

export default Cards;