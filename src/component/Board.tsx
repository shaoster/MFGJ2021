import {
  BoardProps 
} from 'boardgame.io/react'

import {
  Grid,
} from '@material-ui/core';

import CardSequence from './CardSequence';
import SampleGrid from './SampleGrid';
import { GameState } from '../Types';

export default function Board({G, ctx, moves}: BoardProps<GameState>) {
  const {
    playerParts,
    targetParts,
  } = G;
  // TODO: Make more abstract.
  const onClickStep = moves.chooseTarget ?? undefined;
  return <Grid container>
    <Grid item xs={2} className="current-parts">
      <h1>Current</h1>
      <SampleGrid
        parts={playerParts}
        className="sampler player"
        onClickStep={onClickStep}
      />
    </Grid>
    <Grid item xs={2} className="target-parts">
      <h1>Goal</h1>
      <SampleGrid
        parts={targetParts}
        className="sampler goal"
      />
    </Grid>
    <Grid item xs={6}/>
    <Grid item xs={12} className="hand-area">
      <h1>Hand</h1>
      <CardSequence
        cards={G.playerHand}
        onClickCard={moves.playCard}
        buttonLabel="Enqueue"
        className="hand"
      />
    </Grid>
    <Grid item xs={12} className="schedule-area">
      <h1>Schedule</h1>
      <CardSequence
        cards={G.playerSchedule}
        onClickCard={moves.removeCard}
        buttonLabel="Remove"
        className="schedule"
      />
    </Grid>

  </Grid>;
};