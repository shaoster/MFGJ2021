import React, { useEffect, useState } from 'react';

import * as Tone from "tone";

import {
  AppBar,
  Button,
  Paper,
  Tab,
  Tabs,
} from '@material-ui/core';

import {
  chunk,
  range,
  take,
} from 'lodash';

import type {
  Part,
} from '../Game';

export const GRID_WIDTH: number = 4;
export const GRID_HEIGHT: number = 4;
export const STEP_COUNT: number = GRID_WIDTH * GRID_HEIGHT;
export const DEFAULT_BPM: number = 80;

function PartGrid(
  { parts, currentlyPlayingStep, onClickStep = undefined, ...remainingProps }: React.HTMLAttributes<HTMLTableElement> & {
    parts: Array<Part>, currentlyPlayingStep: number | null, onClickStep: any,
  }
)
{
  const [tabIndex, setTabIndex] = useState(0);
  const {
    steps
  } = parts[tabIndex];
  const truncatedSteps: Array<boolean> = take(steps, GRID_WIDTH * GRID_WIDTH);
  const chunkedGrid: Array<Array<boolean>> = chunk(truncatedSteps, 4);
  return (
    <table {...remainingProps}>
      <caption>
        <AppBar position="static">
          <Tabs value={tabIndex} onChange={(_, newValue: number) => setTabIndex(newValue)}>
            {
              parts.map((p: Part) => <Tab label={p.sample}/>)
            }
          </Tabs>
      </AppBar>
      </caption>
      <tbody>
      {
        chunkedGrid.map((row: Array<boolean>, rowId: number) => (
          <tr key={rowId} className="row">
          {
            row.map((cell: boolean, colId: number) => {
              let cellClass: string = "cell ";
              cellClass += (cell ? "selected": "unselected");
              if (rowId * GRID_WIDTH + colId === currentlyPlayingStep) {
                cellClass += " playing";
              }
              const stepId = rowId * GRID_WIDTH + colId;
              return (
                <td key={colId} className={cellClass}>
                  <Paper className="step" variant="outlined" onClick={() => onClickStep && onClickStep(tabIndex, stepId)}/>
                </td>
              );
            })
          }
          </tr>
        ))
      }
      </tbody>
    </table>
  );
}
const keyMapper: { [key: string]: string } = {
  bd: "e4",
  ch: "d4",
  sd: "c4",
};

const sampler = new Tone.Sampler({
  urls: {
    // Bass Drum
    e4: "BD/E808_BD[short]-03.wav",
    // Closed Hat
    d4: "CH/E808_CH-06.wav",
    // Snare
    c4: "SD/E808_SD-03.wav",
  },
  baseUrl: process.env.PUBLIC_URL + "/samples/808/"
}).toDestination();

export default function SampleGrid(
  { parts, onClickStep = undefined, ...remainingProps }: React.HTMLAttributes<HTMLTableElement> & { parts: Array<Part>, onClickStep?: any }
) {
  useEffect(() => {
    Tone.Transport.bpm.value = DEFAULT_BPM;
    Tone.Transport.start();
    return () => {
      Tone.Transport.stop();
    }
  }, []);
  const [currentlyPlayingStep, setCurrentlyPlayingStep] = useState<number | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const play = async () => {
    const sequencer = new Tone.Sequence(
      (time, stepId: number) => {
        if (stepId >= STEP_COUNT) {
          // Dummy fence-post.
          setCurrentlyPlayingStep(null);
          setIsPlaying(false);
          return;
        }
        setCurrentlyPlayingStep(stepId);
        for (let part of parts) {
          if (part.steps[stepId]) {
            sampler.triggerAttackRelease(keyMapper[part.sample], "16n", time);
          }
        }
      },
      range(STEP_COUNT + 1),
      "16n"
    );
    setIsPlaying(true);
    sequencer.loop = false;
    sequencer.start();
  };
  return <>
    <PartGrid
      parts={parts}
      onClickStep={onClickStep}
      currentlyPlayingStep={currentlyPlayingStep}
      {...remainingProps}
    />
  <Button variant="contained" onClick={play} disabled={isPlaying}>{ isPlaying ? "Playing" : "Play" }</Button>
  </>
};