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
import { DEFAULT_BPM, SECONDS_PER_STEP, STEP_COUNT, TRACK_BARS } from '../Constants';
import * as Tone from 'tone';
import { Time } from 'tone/build/esm/core/type/Units';
import LevelDescription from './LevelDescription';
import TrackProgress from './TrackProgress';
import { Player, Sequence } from 'tone';

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
  const [player, setPlayer] = useState<Player | null>(null);
  const [sequence, setSequence] = useState<Sequence | null>(null);
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
    if (!isPlaying) {
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
      stop();
      return;
    }
  }, [currentTime, playerParts, targetParts, currentlyPlayingStep, lastPlayedStep, playerActive, isPlaying])
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
    setSequence(sequencer);
    const player = new Tone.Player(
      levelTrack,
      () => {
        setIsPlaying(true);
        Tone.start();
        sequencer.loop = false;
        sequencer.start();
      }
    ).toDestination();
    setPlayer(player);
    player.loop = false;
    player.autostart = true;
  };
  const stop = () => {
    if (!isPlaying) {
      return;
    }
    setCurrentTime(undefined);
    setLastPlayedStep(null);
    setCurrentlyPlayingStep(null);
    sequence?.stop();
    setSequence(null);
    player?.stop();
    setPlayer(null);
    setIsPlaying(false);
  }
  return <Grid container className="game-board" alignItems="center" justify="center">
    <LevelDescription
      turn={ctx.turn}
      onDismiss={() => {
        // On a new level, play the target first.
        setPlayerActive(false);
        play();
      }}
    />
    <Grid item xs={3} className="pc-area portrait-area" key="pc-area">
      <div className="pc portrait">&nbsp;</div>
    </Grid>
    <Grid item xs={6} className="parts-area">
      <Grid container className="parts" justify="center" key="parts">
        <Grid item xs={12} key="title">
          <h1>{ctx.turn}: {title}</h1>
        </Grid>
        <Grid item xs={1} key="time-elapsed">
          {isPlaying && 
            <span>
              {((currentlyPlayingStep ?? 0)  * SECONDS_PER_STEP).toFixed(1)}
            </span>
          }
        </Grid>
        <Grid item xs={10} key="progress">
          <TrackProgress progress={currentlyPlayingStep} max={TRACK_BARS * STEP_COUNT} />
        </Grid>
        <Grid item xs={1} key="time-remaining">
          {isPlaying && 
            <span>
              {(((TRACK_BARS * STEP_COUNT) - (currentlyPlayingStep ?? 0))  * SECONDS_PER_STEP).toFixed(1)}
            </span>
          }
        </Grid>
        <Grid item xs={12} className="start-stop" key="start-stop">
          <Button
            className={isPlaying ? "stop" : "play"}
            onClick={isPlaying ? stop : play}
          >
            &nbsp;
          </Button>
        </Grid>
        <Grid item xs={12} className="current-parts">
          { playerActive ? 
            <SampleGrid
              parts={playerParts}
              currentlyPlayingStep={playerActive ? currentlyPlayingStep : null}
              className="sampler player"
            />
            :
            <SampleGrid
              parts={targetParts}
              currentlyPlayingStep={!playerActive ? currentlyPlayingStep : null}
              className="sampler player"
            />
          }
          <Button
            variant="contained"
            disabled={playerActive}
            className={playerActive ? "selected" : ""}
            onClick={() => {
              setPlayerActive(true);
              play();
            }}
          >
            Current
          </Button>
          &nbsp;
          <Button
            variant="contained"
            disabled={!playerActive}
            className={!playerActive ? "selected" : ""}
            onClick={() => {
              setPlayerActive(false);
              play();
            }}
          >
            Target
          </Button>
        </Grid>
        <Grid item xs={12} className="dialogue">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </Grid>
      </Grid>
    </Grid>
    <Grid item xs={3} className="npc-area portrait-area" key="npc-area">
      <div className="npc portrait">&nbsp;</div>
    </Grid>
    <Grid item xs={12} key="break"/>
    <Grid item xs={5} className="hand-area" key="hand-area">
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
    <Grid item xs={2} className="next-day" key="next-day">
      <Button variant="contained" onClick={moves.clearSchedule}>Clear</Button>
      <hr/>
      <ContinueButton G={G} onClick={
        () => {
          moves.commitSchedule();
          stop();
        }
      }/>
    </Grid>
    <Grid item xs={5} className="schedule-area" key="schedule-area">
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
  </Grid>;
}