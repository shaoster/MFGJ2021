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
  sampleTarget?: string;
  pattern?: Pattern;

  constructor(flavor: CardFlavor, pattern?: Pattern, part?: string) {
    this.title = flavor.title;
    this.description = flavor.description;
    this.image = flavor.image;
    this.pattern = pattern;
    this.sampleTarget = part;
  }

  playCard(G: GameState) {
    for (const part of G.playerParts) {
      if (part.sample !== this.sampleTarget) {
        continue;
      }
      console.log(this.pattern);
      if (this.pattern) {
        ApplyPatternToPart(this.pattern, part);
      }
    }
  }
}

const Cards : {[key: string]: Card} = {
  // Every Beat.
  layFlat: new CardImpl(
    {
      title: "Lay Flat",
      description: "Lay your shirt flat on your bed."
    },
    [
      StepAction.SET_ON, StepAction.SET_OFF, StepAction.SET_OFF, StepAction.SET_OFF,
      StepAction.SET_ON, StepAction.SET_OFF, StepAction.SET_OFF, StepAction.SET_OFF,
      StepAction.SET_ON, StepAction.SET_OFF, StepAction.SET_OFF, StepAction.SET_OFF,
      StepAction.SET_ON, StepAction.SET_OFF, StepAction.SET_OFF, StepAction.SET_OFF,
    ],
    "sd"
  ),
  // Every Beat.
  fold: new CardImpl(
    {
      title: "Fold",
      description: "Fold your shirt. Wouldn't this be easier if the shirt were laid flat?"
    },
    [
      StepAction.SET_OFF, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.SET_OFF, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "sd"
  ),
};

export default Cards;