import { Puzzle, StepState } from "./Types";

const LT_PREFIX = process.env.PUBLIC_URL + "/samples/levels/";
const Puzzles: Array<Puzzle> = [
  { 
    title: "The Bunk: Part I",
    description: [
      "Welcome Neon!",
      "I'm [???], and I'm supposed to show you to your bunk.",
      "Your training starts tomorrow, so why don't you get settled first?"
    ],
    levelTrack: `${LT_PREFIX}unmixed_0_1_112_bpm.ogg`,
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
      "**PLACE** items from your **To-Do** list on your **Schedule** and get to work!",
      "Keep an eye on what happens when you add a task to your schedule!"
    ],
  },
  {
    title: "The Bunk: Part II",
    description: [
      "Hmmm... I can't seem to find ??? anywhere.",
      "Might as well keep cleaning.",
      "Let's make this bunk sparkle!"
    ],
    levelTrack: `${LT_PREFIX}unmixed_0_1_112_bpm.ogg`,
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
      "Why don't we start by dusting away all these cobwebs?",
      "They sure are layered pretty thick in these corners."
    ]
  },
  {
    title: "The Bunk: Part III",
    description: [
      "??? is still nowhere to be found.",
      "Might as well clean those bedsheets then.",
    ],
    levelTrack: `${LT_PREFIX}unmixed_0_1_112_bpm.ogg`,
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
      "Is the music guiding me somehow?",
    ]
  },
 
 
 
  // 0
  /*
  {
    title: "The Dojo",
    description: [
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
    description: [
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
  {
    title: "The Floor",
    description: [
      "Nice work on that laundry!",
      "Let me introduce you to [???].",
      "We're only just getting started...",
    ],
    levelTrack: `${LT_PREFIX}unmixed_1_2_88_bpm.ogg`,
    targetParts: [
      {
        sample: "bd",
        steps: [
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
          StepState.ACCENT, StepState.OFF, StepState.OFF, StepState.OFF,
        ],
      },
    ],
    startingHand:  [
      "mop",
      "sweep",
      "vacuum",
      "emptyTrash",
    ],
    startingSchedule: [
      "drop",
    ],
    hints: [
      "That's a big mess to tidy up!",
      "Just like with music, sometimes what's missing is heard loudest."
    ],
  },
  // 2
  {
    title: "After Dinner",
    description: [
      "Everything's right back in its place.",
      "You can head to the mess hall now.",
      "[???] will serve you your dinner."
    ],
    levelTrack: `${LT_PREFIX}unmixed_1_3_88_bpm.ogg`,
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
      "rearrange",
      "bus",
      "rinse",
      "scour",
      "dry",
    ],
    startingSchedule: [
      "feast",
    ],
    hints: [
      "You've been working hard! You've arrived just in time for dinner.",
      "Err.. Or rather, just in time for cleaning the tables and dishes from dinner...",
    ],
  },
  // 3
  {
    title: "Putting it All Together",
    description: [
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
    description: [
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