import {
  BoardProps 
} from 'boardgame.io/react'

import {
  Button,
  Grid,
} from '@material-ui/core';

import CardSequence from './CardSequence';
import SampleGrid from './SampleGrid';
import { GameState } from '../Types';
import { CheckLevelComplete } from '../Game';

function ContinueButton({G, onClick} : {G: GameState, onClick: any} ) {
  const enabled = CheckLevelComplete(G);
  return <Button variant="contained" onClick={onClick} disabled={!enabled}>
   Next Day 
  </Button>;
}

export default function Board({G, ctx, moves}: BoardProps<GameState>) {
  const {
    playerParts,
    targetParts,
    unremovable,
  } = G;
  return <Grid container>
    <Grid item xs={12} className="level-title">
      <h1>{ctx.turn}: {G.levelTitle}</h1>
    </Grid>
    <Grid item xs={1} className="current-parts">
      <h1>Current</h1>
      <SampleGrid
        parts={playerParts}
        className="sampler player"
      />
    </Grid>
    <Grid item xs={1} className="target-parts">
      <h1>Goal</h1>
      <SampleGrid
        parts={targetParts}
        className="sampler goal"
      />
    </Grid>
    <Grid item xs={1} className="continue">
    </Grid>
    <Grid item xs={9}/>
    <Grid item xs={12} className="hand-area">
      <h1>Hand</h1>
      <CardSequence
        cards={G.playerHand}
        onClickCard={moves.playCard}
        buttonLabel="Enqueue"
        className="hand"
        unremovable={0}
      />
    </Grid>
    <Grid item xs={12} className="schedule-area">
      <h1>Schedule &nbsp; <ContinueButton G={G} onClick={moves.commitSchedule}/></h1>
      <CardSequence
        cards={G.playerSchedule}
        onClickCard={moves.removeCard}
        buttonLabel="Remove"
        className="schedule"
        unremovable={unremovable}
      />
    </Grid>
  </Grid>;
};