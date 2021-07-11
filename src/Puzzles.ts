import { Puzzle, StepState } from "./Types";

const LT_PREFIX = process.env.PUBLIC_URL + "/samples/levels/";
const Puzzles: Array<Puzzle> = [
  { 
    albumIndex: 0,
    title: "The Baseline Bass",
    introDialogue: [
      {
        speaker: "cadence",
        text: `
          We'll start simple.
        `
      },
      {
        speaker: "cadence",
        text: `
          The first step to any rhythm is the foundation you build on.
        `
      }
    ],
    levelTrack: `${LT_PREFIX}1_1.ogg`,
    targetParts: [
      {
        sample: "bd",
        steps: [
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
        ]
      }
    ],
    startingHand: [
      "makeBed",
      "cleanChest",
      "placeBelongings",
    ],
    startingSchedule: [],
    hints: [
      "Use the cards in your hand to modify those beats on your grid.",
      "See if you can't make your grid look like mine."
    ],
  },
  {
    albumIndex: 0,
    title: "Hi Hat Flavor",
    introDialogue: [
      {
        speaker: "neon",
        text: "Okay, that's my foundation. We can move on, right?"
      },
      {
        speaker: "cadence",
        text: "Patience, Neon. There's still more to teach."
      }
    ],
    levelTrack: `${LT_PREFIX}1_1.ogg`,
    targetParts: [
      {
        sample: "ch",
        steps: [
          StepState.ON, StepState.OFF, StepState.ON, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ON, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ON, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ON, StepState.ON,
        ]
      }
    ],
    startingHand: [
      "dust1",
      "dust2",
    ],
    startingSchedule: [
      "cobwebs",
    ],
    hints: [
      "Use the cards in your hand to modify those beats on your grid.",
      "See if you can't make your grid look like mine.",
      "***Neon:*** Hey didn't I just do this?"
    ],
  },
  {
    albumIndex: 0,
    title: "Combination Station",
    introDialogue: [
      {
        speaker: "neon",
        text: "Alright, hit me with your next shot!"
      },
      {
        speaker: "cadence",
        text: "You’re doing great. But how will you do when you have *two* grids to work with?"
      }
    ],
    levelTrack: `${LT_PREFIX}1_1.ogg`,
    targetParts: [
      {
        sample: "ch",
        steps: [
          StepState.ON, StepState.OFF, StepState.ON, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ON, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ON, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.ON, StepState.ON,
        ]
      },
      {
        sample: "bd",
        steps: [
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
        ]
      }

    ],
    startingHand: [
      "washBedsheets",
      "dryBedsheets",
      "gatherBedsheets",
      "placeBedsheets",
    ],
    startingSchedule: [
    ],
    hints: [
      "Here, both of your grids need to match both of mine before we can move on.",
      "You can switch between them with the buttons labelled ***CH*** and ***BD*** above the grid.",
      "What are ***CH*** and ***BD*** short for? Well that's a secret ^_^."
    ]
  },
  {
    albumIndex: 0,
    title: 'The REAL Fun',
    introDialogue: [
      {
        speaker: "neon",
        text: "The *real* fun? Were we having fake fun before?"
      },
      {
        speaker: "cadence",
        text: "It's just a saying, Neon. Are you ready?"
      },
    ],
    levelTrack: `${LT_PREFIX}1_1.ogg`,
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
      "rearrange",
      "dry",
      "scour",
    ],
    startingSchedule: [
      "feast",
    ],
    hints: [
      "Don't let it overwhelm you!",
      "Each piece is doing exactly what we've done before, it's just a matter of application.",
      "Can you keep up?"
    ],
  },
  {
    albumIndex: 0,
    title: "To Be Continued...",
    introDialogue: [
      {
        speaker: "cadence",
        text: "Thanks for playing!"
      },
      {
        speaker: "neon",
        text: "I guess the credits and acknowledgments go here?"
      },
      {
        speaker: "cadence",
        text: "Sure. This project was built with [ReactJS](https://reactjs.org/) and [boardgame.io](https://boardgame.io/)."
      },
      {
        speaker: "cadence",
        text: "Many general purpose icons and UI components were from [Material UI](https://material-ui.com/)."
      },
      {
        speaker: "cadence",
        text: "Those in-game drum samples were taken from the [SampleRadar 808 Collection](https://www.musicradar.com/news/sampleradar-378-free-808-drum-samples)."
      },
      {
        speaker: "neon",
        text: "Oh! And the source code and raw assets live on [GitHub](https://github.com/shaoster/mfgj202106)."
      },
      {
        speaker: "neon",
        text: "Thanks for playing!"
      }

    ],
    levelTrack: `${LT_PREFIX}1_2.ogg`,
    targetParts: [
      {
        sample: "sd",
        steps: [
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
        ],
      },
      {
        sample: "bd",
        steps: [
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
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
    startingHand:  [
    ],
    startingSchedule: [
    ],
    hints: [
      "To be continued..."
    ],
  },
  /*
  // 0
  {
    title: "The Dojo",
    introDialogue: [
      "Hello, Neon...",
      "We have been eagerly awaiting your arrival at the <???> Dojo.",
      "I am <???>, and I have been tasked with guiding you to your living quarters.",
      "Your training shall begin shortly, but why don't you first get settled in?"
    ],
    levelTrack: `${LT_PREFIX}unmixed_1_1_88_bpm.ogg`,
    targetParts: [
      {
        sample: "ch",
        steps: [
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
        ]
      }
    ],
    startingHand: [
      "makeBed",
      "cleanChest",
    ],
    startingSchedule: [],
  },
  */
  /*
  {
    title: "The Laundry",
    introDialogue: [
      "Hey Neon, are you settled in yet?",
      "I'm [???] and I'm a specialist in [???].",
      "Your training starts today."
    ],
    levelTrack: `${LT_PREFIX}unmixed_1_1_88_bpm.ogg`,
    targetParts: [
      {
        sample: "sd",
        steps: [
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
        ],
      },
    ],
    startingHand: [
      "layFlat",
      "fold",
      "putAway"
    ],
    startingSchedule: [],
    hints: [
      "Why don't we get started by doing the laundry?",
      "**PLACE** items from your **To-Do** list on your **Schedule** and get to work!",
    ],
  },
  // 1
  // 2
  // 3
  {
    title: "Putting it All Together",
    introDialogue: [
      "Wow, all the tables and dishes look great!",
      "You've worked hard.",
      "It's time to meet the master..."
    ],
    levelTrack: `${LT_PREFIX}unmixed_1_all_88_bpm.ogg`,
    overrideTrackBars: 12,
    targetParts: [
      {
        sample: "sd",
        steps: [
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
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
    startingSchedule: [],
    hints: [
      "Show me what you've done today!"
    ]
  },
  {
    title: "Day 2",
    introDialogue: [
      "After the tutorial.",
    ],
    levelTrack: `${LT_PREFIX}unmixed_2_1_112_bpm.ogg`,
    overrideBPM: 112,
    targetParts: [
      {
        sample: "bd",
        steps: [
          StepState.ON, StepState.ON, StepState.OFF, StepState.OFF,
          StepState.OFF, StepState.ON, StepState.OFF, StepState.ON,
          StepState.OFF, StepState.ON, StepState.OFF, StepState.ON,
          StepState.OFF, StepState.OFF, StepState.ON, StepState.OFF,
        ],
      },
      {
        sample: "sd",
        steps: [
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.OFF, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ON, StepState.OFF, StepState.OFF, StepState.OFF,
        ],
      },
      {
        sample: "ch",
        steps: [
          StepState.ACCENT, StepState.ACCENT, StepState.ACCENT, StepState.ACCENT,
          StepState.OFF, StepState.ACCENT, StepState.ON, StepState.ON,
          StepState.ACCENT, StepState.ON, StepState.ON, StepState.ON,
          StepState.OFF, StepState.ON, StepState.ACCENT, StepState.ON,
        ],
      },
    ],
    startingHand: [
    ],
    startingSchedule: [
    ],
    hints: [
      "Things are starting to get hard...",
    ],
  },
  */
];

export default Puzzles;