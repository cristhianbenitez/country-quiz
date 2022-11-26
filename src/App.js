import React from 'react';
import { Quiz } from './components/Quiz';
import { Results } from './components/Results';
import { QuizContext } from './helpers/context';

function App() {
  const [gameState, setGameState] = React.useState('quiz');
  const [score, setScore] = React.useState(0);

  return (
    <QuizContext.Provider value={{ gameState, setGameState, score, setScore }}>
      <div className="country-quiz">
        <div>
          <h1>Country Quiz </h1>
        </div>
        {gameState === 'quiz' && <Quiz />}
        {gameState === 'results' && <Results />}
      </div>
    </QuizContext.Provider>
  );
}

export default App;
