import React, { useState } from 'react';

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
    if (currentlyPlayingStep !== null && index === currentlyPlayingStep % STEP_COUNT) {
      cellClass += "playing";
    }
    return cellClass;
  });

  return (
    <table {...remainingProps} key={tabIndex}>
      <caption>
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
      </caption>
      <tbody>
        <PatternRows
          classSequence={cellClasses}
        />
      </tbody>
    </table>
  );
}

export default function SampleGrid(
  { parts, currentlyPlayingStep, ...remainingProps }: React.HTMLAttributes<HTMLElement> & {
    parts: Array<Part>, currentlyPlayingStep: number | null 
  }
) {
  return <>
    <PartGrid
      parts={parts}
      currentlyPlayingStep={currentlyPlayingStep}
      {...remainingProps}
    />
  </>
};