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

import {
  DEFAULT_BPM,
  GRID_WIDTH,
  STEP_COUNT,
} from '../Constants';
import { Part, StepSequence, StepState } from '../Types';

export function PatternRows(
  { classSequence, ...remainingProps } : React.HTMLAttributes<HTMLElement> & {
    classSequence: Array<string>,
  }
) {
  const chunkedGrid: Array<Array<string>> = chunk(classSequence, GRID_WIDTH);
  return <>
    {
    chunkedGrid.map((row: Array<string>, rowId: number) => (
      <tr key={"row " + rowId} className="row">
      {
        row.map((cellClass: string, colId: number) => {
          return (
            <td key={"col " + colId} className={cellClass}>
              <Paper className="step" variant="outlined"/>
            </td>
          );
        })
      }
      </tr>
    ))
    }
  </>;
};

function PartGrid(
  { parts, currentlyPlayingStep, ...remainingProps }: React.HTMLAttributes<HTMLElement> & {
    parts: Array<Part>, currentlyPlayingStep: number | null
  }
)
{
  const [tabIndex, setTabIndex] = useState(0);
  const {
    steps
  } = parts[tabIndex];
  const truncatedSteps: StepSequence = take(steps, STEP_COUNT);
  const cellClasses: Array<string> = truncatedSteps.map((step: StepState, index: number) => {
    let cellClass = "cell ";
    cellClass += StepState[step] as string + " ";
    if (index === currentlyPlayingStep) {
      cellClass += "playing";
    }
    return cellClass;
  });

  return (
    <table {...remainingProps} key={tabIndex}>
      <caption>
        <AppBar position="relative">
          <Tabs
            variant="fullWidth"
            value={tabIndex}
            onChange={(_, newValue: number) => setTabIndex(newValue)}
            className="part-selector"
          >
            {
              parts.map((p: Part, index: number) =>
                <Tab
                  key={"tab " + index}
                  label={p.sample}
                  style={{ minWidth: 48 }}
                />
              )
            }
          </Tabs>
        </AppBar>
      </caption>
      <tbody>
        <PatternRows
          classSequence={cellClasses}
        />
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
  { parts, ...remainingProps }: React.HTMLAttributes<HTMLElement> & { parts: Array<Part> }
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
          if (part.steps[stepId] !== StepState.OFF) {
            sampler.triggerAttackRelease(keyMapper[part.sample], "16n", time, part.steps[stepId] / 2);
          }
        }
      },
      range(STEP_COUNT + 1),
      "16n"
    );
    setIsPlaying(true);
    Tone.start();
    sequencer.loop = false;
    sequencer.start();
  };
  return <>
    <PartGrid
      parts={parts}
      currentlyPlayingStep={currentlyPlayingStep}
      {...remainingProps}
    />
  <Button variant="contained" onClick={play} disabled={isPlaying}>{ isPlaying ? "Playing" : "Play" }</Button>
  </>
};