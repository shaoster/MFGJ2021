import { Button, Grid, Paper } from "@material-ui/core";
import { take } from "lodash";
import { ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { DialogEntry } from "../Types";
import * as Tone from "tone";
import { dedent } from "./dedent";

const sampler = new Tone.Sampler({
  urls: {
    c4: "bubble.ogg",
  },
  baseUrl: process.env.PUBLIC_URL + "/samples/scene/"
}).toDestination();

export function Cutscene(
  {skip, dialogue, header, song, npc} :
  {skip: any, dialogue: Array<DialogEntry>, header?: ReactElement, song?: string, npc: string})
{
  useEffect(() => {
    const player = new Tone.Player(song).toDestination();
    player.loop = true;
    player.autostart = true;
    return () => { player.stop() }
  }, [song]);
  const [currentDialogEntry, setCurrentDialogEntry] = useState(0);
  const next = (e: any) => {
    e.stopPropagation();
    if (currentDialogEntry + 1 < dialogue.length) {
      setCurrentDialogEntry(currentDialogEntry + 1);
      sampler.triggerAttackRelease("c4", 1);
      return;
    }
  };
  return <Paper variant="outlined" className="cutscene" onClick={next}>
    <Grid container className="game-board" alignItems="center" justify="center">
      <Grid item xs={3} className="pc-area portrait-area" key="pc-area">
        <h1>Neon</h1>
        <div className="pc portrait">
          &nbsp;
        </div>
      </Grid>
      <Grid item xs={6} className="cutscene-body">
        {header ? header : <></>}
        <div className="continue-or-skip">
          { currentDialogEntry + 1 < dialogue.length ?
            <>
            Click anywhere to continue or
            <Button variant="contained" onClick={skip}>
              Skip
            </Button>
            </>
          : <Button variant="contained" onClick={skip}>
              Continue
            </Button>
          }
        </div>
        <hr/>
        {take(dialogue, currentDialogEntry + 1).map(
          (e: DialogEntry, i) => <ReactMarkdown key={i}
            className={"dialog " + e.speaker + (i === currentDialogEntry ? " current" : "")}
          >
            {dedent(e.text)}
          </ReactMarkdown>
        )}
        <div className="continue-or-skip">
          { currentDialogEntry + 1 >= dialogue.length && <Button variant="contained" onClick={skip}>
              Continue
            </Button>
          }
        </div>
      </Grid>
      <Grid item xs={3} className={`npc-area portrait-area ${npc.toLowerCase()}`} key="npc-area">
        <h1>{npc}</h1>
        <div className={`${npc.toLowerCase()} portrait`}>
          &nbsp;
        </div>
      </Grid>
    </Grid>
  </Paper>;
}