import {
  BoardProps 
} from 'boardgame.io/react'

import {
  Grid,
} from '@material-ui/core';

import Hand from './Hand';
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
    <Grid item xs={3} className="current-parts">
      <h1>Current</h1>
      <SampleGrid
        parts={playerParts}
        className="sampler player"
        onClickStep={onClickStep}
      />
    </Grid>
    <Grid item xs={3} className="target-parts">
      <h1>Goal</h1>
      <SampleGrid
        parts={targetParts}
        className="sampler goal"
      />
    </Grid>
    <Grid item xs={6}/>
    <Grid item xs={12} className="hand-area">
      <h1>Hand</h1>
      <Hand
        hand={G.playerHand}
        onClickCard={ctx.activePlayers === null ? moves.playCard : undefined}
        className="hand"
      />
    </Grid>
  </Grid>;
};