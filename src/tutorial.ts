import { useState } from "react";
import { Tutorial } from "./Types";

const TUTORIAL: Array<Tutorial> = [
  {
    key: "start-stop",
    textMarkdown: `
      Click here to replay the steps in the current grid or to stop if the music is already playing.

      Notice the sounds (or lack thereof) made when the steps light up below!
    `
  },
  {
    key: "goal",
    textMarkdown: `
      Didn't quite catch what pattern you were supposed to match?

      Click here to see and hear it again!
    `
  },
  {
    key: "current",
    textMarkdown: `
      Want to switch back to what your current pattern looks like while the music is playing?

      Click this button to swap back to your current pattern!

      Try switching back and forth between **MY PARTS** and **GOAL**!
    `
  },
  {
    key: "reset",
    textMarkdown: `
      Next, try clicking **PLACE** on the cards to the left.

      Notice how they are added to the schedule on the right?

      In both the **TO-DO** and **Schedule**, you can click on the body of the cards to flip through them.

      (This becomes critical on later levels when order matters!)

      Also notice that you can **REMOVE** any cards you **PLACE**.

      Click **RESET** here to restore the level to its original state and continue.
    `
  },
  {
    key: "next",
    textMarkdown: `
      That's pretty much it for the tutorial!

      Once you've clicked **PLACE** on all the cards in your **TO-DO**, the **NEXT** button will light up.

      When you think you've got a pretty good handle on what these buttons do, click **NEXT** to continue.
    `
  }
];

export function useTutorial() : [
  Tutorial | undefined,
  (stepKey? : string) => void,
  () => void,
] {
    // TODO: Extract this somewhere else?
  const [currentTutorialStep, setCurrentTutorialStep] = useState<number>(-1);
  const advance = (stepKey?: string) => {
    if (typeof(stepKey) !== 'undefined') {
      const targetIndex = TUTORIAL.findIndex((t) => t.key === stepKey) + 1;
      if (targetIndex === currentTutorialStep + 1) {
        setCurrentTutorialStep(targetIndex);
      }
      return;
    }
    setCurrentTutorialStep(0);
  }
  const dismiss = () => {
    setCurrentTutorialStep(-1);
  }

  return [
    currentTutorialStep >= 0 ? TUTORIAL[currentTutorialStep] : undefined,
    advance,
    dismiss,
  ];
}
