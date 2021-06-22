import './App.css';
import Board from './component/Board';

function App() {
  const G = {
    playerParts: [
      {
        sample: "sd",
        steps: [
          false, false, false, false,
          true, false, false, false,
          false, false, false, false,
          true, false, false, false,
        ],
      },
      {
        sample: "bd",
        steps: [
          true, false, false, false,
          false, false, false, false,
          true, false, false, false,
          false, false, false, false,
        ],
      },
      {
        sample: "ch",
        steps: [
          true, false, true, false,
          true, false, true, false,
          true, false, true, false,
          true, false, true, true,
        ],
      },
    ],
    targetParts: [
      {
        sample: "sd",
        steps: [
          false, false, false, false,
          true, false, false, false,
          false, false, false, false,
          true, false, false, false,
        ],
      },
      {
        sample: "bd",
        steps: [
          true, false, false, false,
          false, false, false, false,
          true, false, false, false,
          false, false, false, false,
        ],
      },
      {
        sample: "ch",
        steps: [
          true, false, true, false,
          true, false, true, false,
          true, false, true, false,
          true, false, true, true,
        ],
      },
    ]
  };
  return <Board G={G}/>
}

export default App;
