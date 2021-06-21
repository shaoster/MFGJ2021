import './App.css';
import SampleGrid from './SampleGrid';

function App() {
  return (
    <SampleGrid
      parts={[
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
      ]}
      className="sampler"
    />
  );
}

export default App;
