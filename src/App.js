import React from 'react';
import axios from 'axios';

const api = 'https://restcountries.com/v3.1/region/asia';

const getRandomNumber = (max) => Math.floor(Math.random() * max);

function App() {
  const [loading, setLoading] = React.useState(true);
  const [score, setScore] = React.useState(0);
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

  if (loading) return <div>loading</div>;
  return <div className="country-quiz"></div>;
}

export default App;
