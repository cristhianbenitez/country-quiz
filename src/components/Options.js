import React from 'react';
import { QuizContext } from '../helpers/context';

export const Options = ({ countries, correctAnswer, nextQuestion }) => {
  const { score, setScore, setGameState } = React.useContext(QuizContext);
  const [showNextBtn, setShowNextBtn] = React.useState(false);
  const [isIncorrect, setIsIncorrect] = React.useState(false);

  const solutionChecker = (e) => {
    const userSolution = e.currentTarget.innerText;
    const options = document.querySelectorAll('button.quiz__option');
    if (userSolution === correctAnswer) {
      e.target.classList.add('correct');
      setScore(score + 1);
    } else {
      e.target.classList.add('incorrect');
      setIsIncorrect(true);

      options.forEach((element) => {
        if (element.innerText === correctAnswer) {
          element.classList.add('correct');
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
    <div className="quiz__body">
      <div className="quiz__options-container">
        {countries.map(({ name }) => (
          <button
            className="quiz__option"
            key={'child_' + name.common}
            onClick={solutionChecker}
          >
            {name.common}
          </button>
        ))}
      </div>
      {showNextBtn && (
        <button onClick={handleNextQuestion} className="quiz__next-btn">
          Next
        </button>
      )}
    </div>
  );
};
