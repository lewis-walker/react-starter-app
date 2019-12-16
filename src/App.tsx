import React from 'react';
import './App.css';
import { results } from './experiments'

const App: React.FC = () => {
  return (
    <div className="results">
      {
        results.map(
          (result, idx) =>[
            <span key={`title-${idx}`}>{result.title}</span>,
            <span className="value" key={`value-${idx}`}>{result.value}</span>
          ]
        )
      }
    </div>
  );
}

export default App;
