import './App.css';
import { Client } from 'boardgame.io/react';
import Board from './component/Board';
import { MyGame } from './Game';

const App = Client({ game: MyGame, board: Board, numPlayers: 1, debug: true});

export default App;
