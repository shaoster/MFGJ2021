import { Modal, Paper } from "@material-ui/core";
import { forwardRef } from "react";
import { useState } from "react";
import { Cutscene } from "./Cutscene";

function Credits() {
  return <div className="credits">
    <p>Programming & Dev Lead: @shaoster</p>
    <p>Sound Design: @SoundFont+</p>
    <p>Art and Writing: @soupsong</p>
    <p><em>Made for My First Game Jam: Summer 2021</em></p>
  </div>;
}

const INTRO_DIALOG = [
  {
    speaker: "neon",
    text: "I don't get it, Avery! I'm a musical genius, top of my class and top of my game, making new music should be easy! But no matter what I do, nothing good comes out. I just feel so stuck..."
  },
  {
    speaker: "avery",
    text: "Maybe you should see Master Cadence?"
  },
  {
    speaker: "neon",
    text: "What?"
  },
  {
    speaker: "avery",
    text: "Rhythm Master Cadence, she lives kind of clo--",
  },
  {
    speaker: "neon",
    text: "I *know* who Master Cadence is, and I'm not going to get her help. Do I look like a baby to you?",
  },
  {
    speaker: "avery",
    text: "N-- No, no! I just thought that if you needed help, going back to basics would be a good place to sta--"
  },
  {
    speaker: "neon",
    text: "*Help?* I'm *fine* by myself! If your idea of 'help' is sending me to someone who’s going to teach me my *quarter notes*, just leave now."
  },
  {
    speaker: "avery",
    text: "...Yeah, okay. I'll leave. When you *do* realize you need help, go to Master Cadence, since I can't do anything else for you."
  },
  {
    speaker: "avery",
    text: "Goodbye, Neon."
  },
  {
    speaker: "neon",
    text: "Wait-- No, wait, Avery, I didn't mean it!! I'm sorry, I-- Hey, don't--!! Leave me… Alright Master Cadence, where are you?"
  },
];

const Title = forwardRef((props, ref) => {
  return <Paper variant="outlined" className="intro" ref={ref}>
    <div className="intro-body">
      <h1>The Neon Slide</h1>
      <h3>A game about finding your sound</h3>
      <h3>(and getting out of that funk!!!)</h3>
      <p><em>Press Escape or click/tap anywhere to continue...</em></p>
    </div>
    <Credits/>
  </Paper>;
});

export default function Intro({show, acknowledge}: {show: boolean, acknowledge: any}) {
  const [showCutscene, setShowCutscene] = useState(false);
  const handleClose = () => {
    if (showCutscene) {
      acknowledge();
      return;
    }
    setShowCutscene(true);
  }
  return <Modal open={show} onClose={handleClose} onClick={handleClose}>
    {
      showCutscene ? 
        <Cutscene
          skip={acknowledge}
          dialogue={INTRO_DIALOG}
          song="2_full.ogg"
        /> :
        <Title/>
    }
  </Modal>;
}