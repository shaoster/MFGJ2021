import { Button, Paper } from "@material-ui/core";
import { take } from "lodash";
import { ReactElement, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import { DialogEntry } from "../Types";
import * as Tone from "tone";
import { dedent } from "./dedent";

export function Cutscene({skip, dialogue, header, song} : {skip: any, dialogue: Array<DialogEntry>, header?: ReactElement, song?: string}) {
  useEffect(() => {
    const player = new Tone.Player(process.env.PUBLIC_URL + "/samples/scene/" + song).toDestination();
    player.autostart = true;
    return () => { player.stop() }
  }, [song]);
  const [currentDialogEntry, setCurrentDialogEntry] = useState(0);
  const next = (e: any) => {
    e.stopPropagation();
    if (currentDialogEntry + 1 < dialogue.length) {
      setCurrentDialogEntry(currentDialogEntry + 1);
      return;
    }
  };
  return <Paper variant="outlined" className="cutscene" onClick={next}>
      <div className="cutscene-body">
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
          (e: DialogEntry, i) => <ReactMarkdown
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
      </div>
  </Paper>;
}