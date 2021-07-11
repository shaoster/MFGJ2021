import React from 'react';

import {
  Paper,
  Tab,
  Tabs,
} from '@material-ui/core';

import {
  chunk,
  take,
} from 'lodash';

import {
  GRID_WIDTH,
  STEP_COUNT,
} from '../Constants';
import { Part, StepSequence, StepState } from '../Types';

import * as Tone from 'tone';

const sampler = new Tone.Sampler({
  urls: {
    c4: "bubble.ogg",
  },
  baseUrl: process.env.PUBLIC_URL + "/samples/scene/"
}).toDestination();

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
  { parts, currentlyPlayingStep, tabIndex, setTabIndex, ...remainingProps }: React.HTMLAttributes<HTMLElement> & {
    parts: Array<Part>, currentlyPlayingStep: number | null, tabIndex: number, setTabIndex: any
  }
)
{
  // Workaround to make us resistant to non-atomic updates of tabIndex and parts between levels.
  const safeTabIndex = Math.min(parts.length - 1, tabIndex);  
  const {
    steps,
    sample,
  } = parts[safeTabIndex];
  const truncatedSteps: StepSequence = take(steps, STEP_COUNT);
  const cellClasses: Array<string> = truncatedSteps.map((step: StepState, index: number) => {
    let cellClass = "cell ";
    cellClass += StepState[step] as string + " ";
    if (currentlyPlayingStep !== null && index === currentlyPlayingStep % STEP_COUNT) {
      cellClass += "playing";
    }
    return cellClass;
  });

  return (
    <table {...remainingProps} key={safeTabIndex}>
      <caption>
        <Tabs
          variant="fullWidth"
          value={safeTabIndex}
          onChange={(_, newValue: number) => {
            setTabIndex(newValue);
            sampler.triggerAttackRelease("c4", 1);
          }}
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
      </caption>
      <tbody className={sample}>
        <PatternRows
          classSequence={cellClasses}
        />
      </tbody>
    </table>
  );
}

export default function SampleGrid(
  { parts, currentlyPlayingStep, tabIndex, setTabIndex, ...remainingProps }: React.HTMLAttributes<HTMLElement> & {
    parts: Array<Part>, currentlyPlayingStep: number | null, tabIndex: number, setTabIndex: any
  }
) {
  return <>
    <PartGrid
      parts={parts}
      tabIndex={tabIndex}
      setTabIndex={setTabIndex}
      currentlyPlayingStep={currentlyPlayingStep}
      {...remainingProps}
    />
  </>
};