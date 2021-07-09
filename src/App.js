import './App.css';
import { Client } from 'boardgame.io/react';
import Board from './component/Board';
import Intro from './component/Intro';
import { MyGame } from './Game';

import {useState} from 'react';

const GameClient = Client({ game: MyGame, board: Board, numPlayers: 1, debug: true });

function App() {
  const [showIntro, setShowIntro] = useState(true);
  if (showIntro) {
    return <Intro show={showIntro} acknowledge={() => setShowIntro(false)}/>;
  }
  return <GameClient/>;
}

export default App;
