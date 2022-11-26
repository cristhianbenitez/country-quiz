import React from 'react';
import { QuizContext } from '../helpers/context';

export const Options = ({ countries, correctAnswer, nextQuestion }) => {
  const { score, setScore, setGameState } = React.useContext(QuizContext);
  const [showNextBtn, setShowNextBtn] = React.useState(false);
  const [isIncorrect, setIsIncorrect] = React.useState(false);

  const solutionChecker = (e) => {
    const userSolution = e.currentTarget.innerText;
    const options = document.querySelectorAll('.option');
    if (userSolution === correctAnswer) {
      e.target.style.color = 'green';
      setScore(score + 1);
    } else {
      e.target.style.color = 'red';
      setIsIncorrect(true);
      options.forEach((e) => {
        if (e.innerText === correctAnswer) {
          e.style.color = 'green';
        }
      });
    }
    //disable all options
    options.forEach((e) => {
      e.disabled = true;
    });

    setShowNextBtn(true);
  };

  const handleNextQuestion = () => {
    if (isIncorrect) {
      setGameState('results');
    }
    setShowNextBtn(false);
    nextQuestion();
  };

  return (
    <>
      <div>
        {countries.map(({ name }) => (
          <button
            className="option"
            key={'child_' + name.common}
            onClick={solutionChecker}
          >
            {name.common}
          </button>
        ))}
      </div>
      {showNextBtn && <button onClick={handleNextQuestion}>next</button>};
    </>
  );
};
