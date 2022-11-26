import React from 'react';
import { QuizContext } from '../helpers/context';

export const Results = () => {
  const { setScore, setGameState } = React.useContext(QuizContext);
  const tryAgain = () => {
    setScore(0);
    setGameState('quiz');
  };
  return (
    <div className="Results">
      <h2>Results</h2>
      <button onClick={tryAgain}>try again</button>
    </div>
  );
};
