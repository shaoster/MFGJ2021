import { Puzzle } from "./Types";

const Puzzles: Array<Puzzle> = [
  // 0
  {
    title: "The Laundry",
    targetParts: [
      {
        sample: "sd",
        steps: [
          0, 0, 0, 0,
          1, 0, 0, 0,
          0, 0, 0, 0,
          1, 0, 0, 0,
        ],
      },
    ],
    startingHand: [
      "takeDownClothes",
      "spread",
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
          1, 0, 0, 0,
          1, 0, 0, 0,
          1, 0, 0, 0,
          1, 0, 0, 0,
        ],
      },
    ],
    startingHand:  [
      "sweep",
      "sweep",
      "sweep",
      "sweep",
    ]
  },
  // 2
  {
    title: "The Dishes",
    targetParts: [
      {
        sample: "ch",
        steps: [
          1, 0, 2, 0,
          1, 0, 2, 0,
          1, 0, 2, 0,
          1, 0, 2, 0,
        ],
      },
    ],
    startingHand: [
      "rinse",
      "scour",
      "rinse",
      "scour",
    ],
  },
  // 3
  {
    title: "Putting it All Together",
    targetParts: [
      {
        sample: "sd",
        steps: [
          0, 0, 0, 0,
          1, 0, 0, 0,
          0, 0, 0, 0,
          1, 0, 0, 0,
        ],
      },
      {
        sample: "bd",
        steps: [
          1, 0, 0, 0,
          0, 0, 0, 0,
          1, 0, 0, 0,
          0, 0, 0, 0,
        ],
      },
      {
        sample: "ch",
        steps: [
          1, 0, 1, 0,
          1, 0, 1, 0,
          1, 0, 1, 0,
          1, 0, 1, 1,
        ],
      },
    ],
    startingHand: [
      "roomba",
      "dishwasher",
      "laundryBot"
    ],
  },
];

export default Puzzles;