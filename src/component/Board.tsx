import {
  BoardProps 
} from 'boardgame.io/react'

import SampleGrid from './SampleGrid';
import type { GameState } from '../Game';

export default function Board({G}: BoardProps<GameState>) {
  const {
    playerParts,
    targetParts,
  } = G;
  return <>
    <SampleGrid
      parts={playerParts}
      className="sampler player"
    />
    <SampleGrid
      parts={targetParts}
      className="sampler target"
    />
  </>;
};