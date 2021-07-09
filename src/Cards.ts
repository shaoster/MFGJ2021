import { GRID_WIDTH, STEP_COUNT } from "./Constants";
import { Card, CardFlavor, GameState, Part, Pattern, StepAction, StepState } from "./Types";

// Separate from CardImpl, for UI/preview purposes.
export const ApplyPatternToPart: (pattern: Pattern, part: Part) => void = (pattern, part) => {
  const updatedSteps = [...part.steps];
  for (const [stepIndex, stepAction] of pattern.entries()) {
    const processStep: () => StepState = () => {
      const currentStep = part.steps[stepIndex];
      switch (stepAction) {
        case StepAction.INCREMENT:
          if (currentStep === StepState.OFF) {
            return StepState.ON;
          } else {
            return StepState.ACCENT;
          }
        case StepAction.DECREMENT:
          if (currentStep === StepState.ACCENT) {
            return StepState.ON;
          } else {
            return StepState.OFF;
          }
        case StepAction.MAX:
          return StepState.ACCENT;
        case StepAction.ZERO:
          return StepState.OFF;
        case StepAction.SHIFT_UP:
          if (stepIndex + GRID_WIDTH > STEP_COUNT) {
            return StepState.OFF
          }
          return part.steps[stepIndex + GRID_WIDTH];
        case StepAction.SHIFT_RIGHT:
          if ((stepIndex % GRID_WIDTH) === 0) {
            return StepState.OFF;
          }
          return part.steps[stepIndex - 1];
        case StepAction.SHIFT_DOWN:
          if (stepIndex - GRID_WIDTH < 0) {
            return StepState.OFF;
          }
          return part.steps[stepIndex - GRID_WIDTH];
        case StepAction.SHIFT_LEFT:
          if ((stepIndex % GRID_WIDTH) + 1 === GRID_WIDTH) {
            return StepState.OFF;
          }
          return part.steps[stepIndex + 1];
        default:
          return currentStep;
      }
    }
    updatedSteps[stepIndex] = processStep();
  }
  part.steps = updatedSteps;
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
      if (this.pattern) {
        ApplyPatternToPart(this.pattern, part);
      }
    }
  }
}

const Cards : {[key: string]: Card} = {
  makeBed: new CardImpl(
    {
      title: "Make Bed",
      description: `
        Good job!

        Pay attention to the order that you’re playing these cards in, or you could really get messed up.
      `
    },
    [
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "bd"
  ),
  cleanChest: new CardImpl(
    {
      title: "Clean Chest",
      description: `
        Hey, you've found **ACCENTED** beats!
        
        A beat can be **NORMAL** or **ACCENTED**, which just means it's being hit harder.
      `
    },
    [
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "bd"
  ),
  placeBelongings: new CardImpl(
    {
      title: "Place Belongings",
      description: `
        Wonderful! You've got yourself a solid foundation.

        Click **NEXT** to continue to the next level.
      `
    },
    [
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.MAX, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "bd"
  ),
  cobwebs: new CardImpl(
    {
      title: "Cobwebs",
      description: `
        Why don't we start by dusting away all these cobwebs?

        They sure are layered pretty thick in these corners.
      `
    },
    [
      StepAction.MAX, StepAction.INCREMENT, StepAction.INCREMENT, StepAction.MAX,
      StepAction.INCREMENT, StepAction.INCREMENT, StepAction.INCREMENT, StepAction.INCREMENT,
      StepAction.INCREMENT, StepAction.INCREMENT, StepAction.INCREMENT, StepAction.INCREMENT,
      StepAction.MAX, StepAction.INCREMENT, StepAction.INCREMENT, StepAction.MAX,
    ],
    "ch"
  ),
  dust1: new CardImpl(
    {
      title: "Dust 1",
      description: `
        ***You do a quick sweep of the whole room.***

        That seemed to clear things up a bunch.

        Let's keep at it!
      `
    },
    [
      StepAction.IGNORE, StepAction.DECREMENT, StepAction.IGNORE, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.DECREMENT, StepAction.IGNORE, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.DECREMENT, StepAction.IGNORE, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.DECREMENT, StepAction.IGNORE, StepAction.DECREMENT,
    ],
    "ch"
  ),
  dust2: new CardImpl(
    {
      title: "Dust 2",
      description: `
        ***You scrub those hard-to-reach corners.***

        Wow! This bunk is really starting to feel like home!

        Too bad dust got on all the bedsheets; let's launder those ***NEXT***!
      `
    },
    [
      StepAction.DECREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.DECREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "ch"
  ),
  washBedsheets: new CardImpl(
    {
      title: "Wash Bedsheets",
      description: `
        ***You wash the bedsheets.***
      `
    },
    [
      StepAction.IGNORE, StepAction.INCREMENT, StepAction.IGNORE, StepAction.INCREMENT,
      StepAction.IGNORE, StepAction.INCREMENT, StepAction.IGNORE, StepAction.INCREMENT,
      StepAction.IGNORE, StepAction.INCREMENT, StepAction.IGNORE, StepAction.INCREMENT,
      StepAction.IGNORE, StepAction.INCREMENT, StepAction.INCREMENT, StepAction.INCREMENT,
    ],
    "ch"
  ),
  dryBedsheets: new CardImpl(
    {
      title: "Dry Bedsheets",
      description: `
        ***You hang your bedsheets up to dry.***
      `
    },
    [
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,
    ],
    "ch"
  ),
  gatherBedsheets: new CardImpl(
    {
      title: "Gather Bedsheets",
      description: `
        ***You take down your now dry and fresh bedsheets.***

        Cool! Even moving things around makes music too!
      `
    },
    [
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.MAX, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.MAX, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "bd"
  ),
  placeBedsheets: new CardImpl(
    {
      title: "Place Bedsheets",
      description: `
        ***You re-make the bed with the fresh bedsheets.***

        I hear a knock on the door. Let's see what's ***NEXT***.
      `
    },
    [
      StepAction.SHIFT_UP, StepAction.SHIFT_UP, StepAction.SHIFT_UP, StepAction.SHIFT_UP,
      StepAction.SHIFT_DOWN, StepAction.SHIFT_DOWN, StepAction.SHIFT_DOWN, StepAction.SHIFT_DOWN,
      StepAction.SHIFT_UP, StepAction.SHIFT_UP, StepAction.SHIFT_UP, StepAction.SHIFT_UP,
      StepAction.SHIFT_DOWN, StepAction.SHIFT_DOWN, StepAction.SHIFT_DOWN, StepAction.SHIFT_DOWN,
    ],
    "bd"
  ),




  layFlat: new CardImpl(
    {
      title: "Lay Flat",
      description: "Lay your shirt flat on your bed. The foundation of any laundry folding routine."
    },
    [
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "sd"
  ),
  fold: new CardImpl(
    {
      title: "Fold",
      description: "Fold your shirt. Add some complexity! (Assuming you have something to start with...)"
    },
    [
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "sd"
  ),
  putAway: new CardImpl(
    {
      title: "Put Away",
      description: "Put away your freshly folded clothes."
    },
    [
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.MAX, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "sd"
  ),
  drop: new CardImpl(
    {
      title: "The Mess",
      description: "Oops! You dropped your [?] all over the floor. What a mess..."
    },
    [
      StepAction.MAX, StepAction.MAX, StepAction.MAX, StepAction.MAX,
      StepAction.MAX, StepAction.MAX, StepAction.MAX, StepAction.MAX,
      StepAction.MAX, StepAction.MAX, StepAction.MAX, StepAction.MAX,
      StepAction.MAX, StepAction.MAX, StepAction.MAX, StepAction.MAX,
    ],
    "bd"
  ),
  mop: new CardImpl(
    {
      title: "Mop",
      description: "Mop the floor. This mess might be a bit too much to soak up though."
    },
    [
      StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT, StepAction.DECREMENT,
    ],
    "bd"
  ),
  sweep: new CardImpl(
    {
      title: "Sweep",
      description: "Sweep the floor. It's a bit hard to get the corners though.."
    },
    [
      StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT, StepAction.IGNORE,
    ],
    "bd"
  ),
  vacuum: new CardImpl(
    {
      title: "Vacuum",
      description: "Suck up whatever is left."
    },
    [
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.DECREMENT,
    ],
    "bd"
  ),
  emptyTrash: new CardImpl(
    {
      title: "Empty Trash",
      description: "Those bins were chalk full of [???]! Much better now..."
    },
    [
      StepAction.IGNORE, StepAction.ZERO, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.ZERO, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.ZERO, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.ZERO, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "bd"
  ),
  feast: new CardImpl(
    {
      title: "Feast",
      description: "What a delicious meal! What are we going to do about all the dishes?"
    },
    [
      StepAction.INCREMENT, StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.INCREMENT, StepAction.IGNORE, StepAction.MAX,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.MAX, StepAction.IGNORE, StepAction.MAX, StepAction.MAX,
    ],
    "ch"
  ),
  rearrange: new CardImpl(
    {
      title: "Rearrange",
      description: "All the chairs and tables have been moved away from their original places!"
    },
    [
      StepAction.SHIFT_LEFT, StepAction.SHIFT_UP, StepAction.SHIFT_LEFT, StepAction.SHIFT_UP,
      StepAction.SHIFT_DOWN, StepAction.SHIFT_UP, StepAction.SHIFT_DOWN, StepAction.SHIFT_UP,
      StepAction.SHIFT_DOWN, StepAction.SHIFT_UP, StepAction.SHIFT_DOWN, StepAction.SHIFT_UP,
      StepAction.SHIFT_DOWN, StepAction.SHIFT_RIGHT, StepAction.SHIFT_DOWN, StepAction.SHIFT_RIGHT,
    ],
    "ch"

  ),
  bus: new CardImpl(
    {
      title: "Bus",
      description: "What a delicious meal! What are we going to do about all the dishes?"
    },
    [
      StepAction.SHIFT_LEFT, StepAction.SHIFT_LEFT, StepAction.SHIFT_LEFT, StepAction.SHIFT_UP,
      StepAction.SHIFT_DOWN, StepAction.IGNORE, StepAction.IGNORE, StepAction.SHIFT_UP,
      StepAction.SHIFT_DOWN, StepAction.IGNORE, StepAction.IGNORE, StepAction.SHIFT_UP,
      StepAction.SHIFT_DOWN, StepAction.SHIFT_RIGHT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_RIGHT,
    ],
    "ch"
  ),
  rinse: new CardImpl(
    {
      title: "Rinse",
      description: "Rinse the dishes. This will make them easier to clean."
    },
    [
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.SHIFT_LEFT, StepAction.SHIFT_UP, StepAction.SHIFT_LEFT, StepAction.SHIFT_UP,
      StepAction.SHIFT_DOWN, StepAction.SHIFT_RIGHT, StepAction.SHIFT_DOWN, StepAction.SHIFT_RIGHT,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "ch"
  ),
  scour: new CardImpl(
    {
      title: "Scour",
      description: "Scour the dishes. Really put your back into it."
    },
    [
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,
      StepAction.SHIFT_LEFT, StepAction.SHIFT_UP, StepAction.SHIFT_UP, StepAction.SHIFT_RIGHT,
      StepAction.SHIFT_DOWN, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_DOWN,
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,
    ],
    "ch"
  ),
  dry: new CardImpl(
    {
      title: "Dry",
      description: "Let the dishes dry. What a lovely sight!"
    },
    [
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,
      StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT, StepAction.SHIFT_LEFT, StepAction.SHIFT_RIGHT,

    ],
    "ch"
  ),
  laundry: new CardImpl(
    {
      title: "Laundry",
      description: "Do the laundry. You know how!"
    },
    [
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.MAX, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.MAX, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "sd"
  ),
  floor: new CardImpl(
    {
      title: "Floor",
      description: "Clean the floor. You know how!"
    },
    [
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.IGNORE, StepAction.IGNORE,
    ],
    "bd"
  ),
  dishes: new CardImpl(
    {
      title: "Dishes",
      description: "Do the dishes. You know how!"
    },
    [
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.MAX, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.MAX, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.MAX, StepAction.IGNORE,
      StepAction.INCREMENT, StepAction.IGNORE, StepAction.MAX, StepAction.IGNORE,
    ],
    "ch"
  )
};

export default Cards;