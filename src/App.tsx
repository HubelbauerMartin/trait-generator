import './App.css';
import { POSITIVE_TRAITS, NEUTRAL_TRAITS, NEGATIVE_TRAITS } from './constants';

function App() {
  return (
    <>
      <h1>Generate Traits</h1>
      <div>
        {POSITIVE_TRAITS.length} positive,
        {NEUTRAL_TRAITS.length} neutral,
        {NEGATIVE_TRAITS.length} negative,
      </div>

      <button>Generate!</button>
    </>
  );
}

export default App;
