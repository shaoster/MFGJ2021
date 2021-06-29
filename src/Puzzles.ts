import { Puzzle, StepState } from "./Types";

const Puzzles: Array<Puzzle> = [
  // 0
  {
    title: "The Laundry",
    targetParts: [
      {
        sample: "sd",
        steps: [
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
        ],
      },
    ],
    startingHand: [
      "layFlat",
      "fold",
    ]
  },
  // 1
  {
    title: "The Floor",
    targetParts: [
      {
        sample: "bd",
        steps: [
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
        ],
      },
    ],
    startingHand:  [
      "mop",
      "sweep",
      "vacuum",
    ],
    playerSchedule: [
      "drop",
    ]
  },
  // 2
  {
    title: "The Dishes",
    targetParts: [
      {
        sample: "ch",
        steps: [
          StepState.ON, StepState.OFF, StepState.ACCENT, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ACCENT, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ACCENT, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ACCENT, StepState.OFF,
        ],
      },
    ],
    startingHand: [
      "bus",
      "rinse",
      "scour",
      "dry",
    ],
    playerSchedule: [
      "feast",
    ],
  },
  // 3
  {
    title: "Putting it All Together",
    targetParts: [
      {
        sample: "sd",
        steps: [
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
        ],
      },
      {
        sample: "bd",
        steps: [
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
        ],
      },
      {
        sample: "ch",
        steps: [
          StepState.ON, StepState.OFF, StepState.ACCENT, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ACCENT, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ACCENT, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ACCENT, StepState.OFF,
        ],
      },
    ],
    startingHand: [
      "laundry",
      "floor",
      "dishes",
    ],
  },
];

export default Puzzles;