import React from 'react';
import axios from 'axios';

import { QuizContext } from '../helpers/context';

import { Options } from './Options';

const api = 'https://restcountries.com/v3.1/region/asia';
const getRandomNumber = (max) => Math.floor(Math.random() * max);

export const Quiz = () => {
  const { score, setScore } = React.useContext(QuizContext);

  const [loading, setLoading] = React.useState(true);
  const [countries, setCountries] = React.useState([]);
  const effectRan = React.useRef(false);

  React.useEffect(() => {
    if (effectRan.current) {
      return;
    }
    if (effectRan.current === false) {
      setLoading(true);

      getCountries();
      effectRan.current = true;
    }
  }, [countries]);

  const getCountries = async () => {
    const { data } = await axios(api);
    const randomNumber = getRandomNumber(data.length);
    const randomFourCountries = data.slice(randomNumber, randomNumber + 4);
    setCountries(randomFourCountries);
    setLoading(false);
  };

  const randomNumber = getRandomNumber(countries.length);
  const selectedCountry = countries[randomNumber];

  const nextQuestion = () => {
    setLoading(true);
    getCountries();
  };

  if (loading) return <div>loading</div>;
  return (
    <div className="quiz">
      <h2>{selectedCountry.name.common} is the capital of</h2>
      <Options
        countries={countries}
        correctAnswer={selectedCountry.name.common}
        nextQuestion={nextQuestion}
      />
    </div>
  );
};
