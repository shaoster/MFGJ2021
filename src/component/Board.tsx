import {
  BoardProps 
} from 'boardgame.io/react'

import {
  Button,
  Grid,
} from '@material-ui/core';

import CardSequence from './CardSequence';
import SampleGrid from './SampleGrid';
import { GameState, StepState } from '../Types';
import { CheckLevelComplete } from '../Game';
import { range } from 'lodash';
import React, { useEffect, useState } from 'react';
import { DEFAULT_BPM, STEP_COUNT, TRACK_BARS } from '../Constants';
import * as Tone from 'tone';
import { Time } from 'tone/build/esm/core/type/Units';
import LevelDescription from './LevelDescription';

function ContinueButton({G, onClick} : {G: GameState, onClick: any} ) {
  const enabled = CheckLevelComplete(G);
  return <Button variant="contained" onClick={onClick} disabled={!enabled}>
   Next Day 
  </Button>;
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

export default function Board({
  G, ctx, moves  
} : React.HTMLAttributes<HTMLElement> & BoardProps<GameState>)
{
  const {
    title,
    levelTrack,
    playerParts,
    targetParts,
    playerHand,
    playerSchedule,
  } = G;
  useEffect(() => {
    Tone.Transport.bpm.value = DEFAULT_BPM;
    Tone.start();
    Tone.Transport.start();
    return () => {
      Tone.Transport.stop();
    }
  }, []);
  const [currentlyPlayingStep, setCurrentlyPlayingStep] = useState<number | null>(null);
  const [lastPlayedStep, setLastPlayedStep] = useState<number | null>(null);
  const [currentTime, setCurrentTime] = useState<Time | undefined>(undefined);
  const [isPlaying, setIsPlaying] = useState(false);
  const [playerActive, setPlayerActive] = useState(true);
  useEffect(() => {
    if (lastPlayedStep === currentlyPlayingStep) {
      return;
    }
    if(typeof currentTime === 'undefined') {
      return;
    }
    if (currentlyPlayingStep === null) {
      return;
    }
    setLastPlayedStep(currentlyPlayingStep);
    // stepIndex selects from our step sequencer, which is only 16th notes on repeat.
    const stepIndex = currentlyPlayingStep % STEP_COUNT;
    const parts = playerActive ? playerParts : targetParts;
    for (let part of parts) {
      if (part.steps[stepIndex] !== StepState.OFF) {
        sampler.triggerAttackRelease(keyMapper[part.sample], "16n", currentTime, part.steps[stepIndex] / 2);
      }
    }
    if (currentlyPlayingStep >= (STEP_COUNT * TRACK_BARS) - 1) {
      setIsPlaying(false);
      setCurrentTime(undefined);
      setCurrentlyPlayingStep(null);
      return;
    }
  }, [currentTime, playerParts, targetParts, currentlyPlayingStep, lastPlayedStep, playerActive])
  const onStep = (time: Time, stepId: number) => {
    // This is a bit subtle: time has to be set before step.
    // Only step triggers the sample side effect.
    setCurrentTime(time);
    setCurrentlyPlayingStep(stepId);
  };
  const play = () => {
    if (isPlaying) {
      return;
    }
    const sequencer = new Tone.Sequence(
      onStep,
      range(STEP_COUNT * TRACK_BARS),
      "16n"
    );
    const player = new Tone.Player(
      levelTrack,
      () => {
        setIsPlaying(true);
        Tone.start();
        sequencer.loop = false;
        sequencer.start();
      }
    ).toDestination();
    player.loop = false;
    player.autostart = true;
  };
  return <Grid container className="game-board" alignItems="center" justify="center">
    <LevelDescription
      turn={ctx.turn}
      onDismiss={() => {
        // On a new level, play the target first.
        setPlayerActive(false);
        play();
      }}
    />
    <Grid item xs={12} className="title" key="title">
      <h1>{ctx.turn}: {title}</h1>
    </Grid>
    <Grid container className="parts" justify="center" key="parts">
      <Grid item xs={1} className="current-parts">
        <SampleGrid
          parts={playerParts}
          currentlyPlayingStep={playerActive ? currentlyPlayingStep : null}
          className="sampler player"
        />
        <Button
          variant="contained"
          disabled={playerActive}
          onClick={() => {
            setPlayerActive(true);
            play();
          }}
        >
          Current
        </Button>
      </Grid>
      <Grid item xs={1} className="target-parts">
        <SampleGrid
          parts={targetParts}
          currentlyPlayingStep={!playerActive ? currentlyPlayingStep : null}
          className="sampler player"
        />
        <Button
          variant="contained"
          disabled={!playerActive}
          onClick={() => {
            setPlayerActive(false);
            play();
          }}
        >
          Target
        </Button>
      </Grid>
    </Grid>
    <Grid item xs={6} className="hand-area" key="hand-area">
      <h3>To-Do</h3>
      <CardSequence
        cards={playerHand}
        onClickCard={(i: number) => {
          moves.playCard(i);
          play();
        }}
        buttonLabel="Enqueue"
        className="hand"
        unremovable={0}
      />
    </Grid>
    <Grid item xs={6} className="schedule-area" key="schedule-area">
      <h3>Schedule</h3>
      <CardSequence
        cards={playerSchedule}
        onClickCard={(i: number) => {
          moves.removeCard(i);
          play();
        }}
        buttonLabel="Remove"
        className="schedule"
        unremovable={G.startingSchedule.length}
      />
    </Grid>
    <Grid item xs={12} className="next-day" key="next-day">
      <Button variant="contained" onClick={moves.clearSchedule}>Clear Schedule</Button>
      &nbsp;
      <ContinueButton G={G} onClick={moves.commitSchedule}/>
    </Grid>
  </Grid>;
}