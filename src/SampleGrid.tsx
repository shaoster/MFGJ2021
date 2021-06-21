import React, { useEffect, useState } from 'react';

import * as Tone from "tone";

import {
  Button,
  Paper,
} from '@material-ui/core';

import {
  chunk,
  range,
  sample,
  take,
} from 'lodash';

export const GRID_WIDTH: number = 4;
export const GRID_HEIGHT: number = 4;
export const STEP_COUNT: number = GRID_WIDTH * GRID_HEIGHT;

interface Part {
  sample: string;
  steps: Array<boolean>;
}

function PartGrid(
  { part, currentlyPlayingStep, ...remainingProps }: {
    part: Part, currentlyPlayingStep: number | null
  }
)
{
  const {
    sample,
    steps
  } = part;
  const truncatedSteps: Array<boolean> = take(steps, GRID_WIDTH * GRID_WIDTH);
  const chunkedGrid: Array<Array<boolean>> = chunk(truncatedSteps, 4);
  return (
    <table {...remainingProps}>
      <caption>{sample}</caption>
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
              return (
                <td key={colId} className={cellClass}>
                  <Paper className="step" variant="outlined"/>
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
  baseUrl: "/samples/808/"
}).toDestination();

export default function SampleGrid(
  { parts, ...remainingProps }: { parts: Array<Part>}
) {
  useEffect(() => {
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
  {
    parts.map((p: Part, index: number) =>
      <PartGrid
        key={index}
        part={p}
        currentlyPlayingStep={currentlyPlayingStep}
        {...remainingProps}
      />
    )
  }
  <Button variant="contained" onClick={play} disabled={isPlaying}>{ isPlaying ? "Playing" : "Play" }</Button>
  </>
};