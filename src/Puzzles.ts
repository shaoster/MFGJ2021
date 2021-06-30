import { Puzzle, StepState } from "./Types";

const LT_PREFIX = process.env.PUBLIC_URL + "/samples/levels/";
const Puzzles: Array<Puzzle> = [
  // 0
  {
    title: "The Laundry",
    description: [
      "laundry laundry laundry",
      "laundry laundry"
    ],
    levelTrack: `${LT_PREFIX}dummy116bpm.mp3`,
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
    ],
    startingSchedule: [],
  },
  // 1
  {
    title: "The Floor",
    description: [
      "floor sweepy sweepy floor",
      "sweepy sweepy floor floor"
    ],
    levelTrack: `${LT_PREFIX}dummy116bpm.mp3`,
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
    startingSchedule: [
      "drop",
    ]
  },
  // 2
  {
    title: "The Dishes",
    description: [
      "dishy dishy wishy wash",
      "washa dishy dish dish"
    ],
    levelTrack: `${LT_PREFIX}dummy116bpm.mp3`,
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
    startingSchedule: [
      "feast",
    ],
  },
  // 3
  {
    title: "Putting it All Together",
    description: [
      "every every thing thing",
      "all at once"
    ],
    levelTrack: `${LT_PREFIX}dummy116bpm.mp3`,
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
    startingSchedule: []
  },
];

export default Puzzles;