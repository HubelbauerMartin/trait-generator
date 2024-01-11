import { useState } from 'react';
import './App.css';
import { POSITIVE_TRAITS, NEUTRAL_TRAITS, NEGATIVE_TRAITS } from './constants';

function App() {
  const [traits, setTraits] = useState<[string, string, string][]>([]);

  const handleClick = () => {
    const traits: [string, string, string][] = [];
    for (let i = 0; i < 3; i++) {
      const positiveTrait = POSITIVE_TRAITS[Math.floor(Math.random() * POSITIVE_TRAITS.length)];
      const neutralTrait = NEUTRAL_TRAITS[Math.floor(Math.random() * NEUTRAL_TRAITS.length)];
      const negativeTrait = NEGATIVE_TRAITS[Math.floor(Math.random() * NEGATIVE_TRAITS.length)];

      traits.push([positiveTrait, neutralTrait, negativeTrait]);
    }

    setTraits(traits);
  };

  return (
    <>
      <h1>Generate Traits 🎲</h1>
      <div>
        Press the Generate button to get 3 random traits from each category of
        <ul>
          <li>{POSITIVE_TRAITS.length} positive traits</li>
          <li>{NEUTRAL_TRAITS.length} neutral traits</li>
          <li>{NEGATIVE_TRAITS.length} negative traits</li>
        </ul>
      </div>

      <button onClick={handleClick}>Generate!</button>
      {traits.length > 0 && (
        <div>
          <table>
            <thead>
              <tr>
                <th>Positive</th>
                <th>Neutral</th>
                <th>Negative</th>
              </tr>
            </thead>
            <tbody>
              {traits.map((trait, index) => (
                <tr key={index}>
                  <td>{trait[0]}</td>
                  <td>{trait[1]}</td>
                  <td>{trait[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default App;
