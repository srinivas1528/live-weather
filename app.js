import React, {useCallback, useState} from 'react';
import Header from './Components/Header.js';
import InputCity from './Components/InputCity'
import ShowWeather from './Components/ShowWeather'
import './styles.css';

const App = ()=> {

  const [inputCity, setInputCity] = React.useState("Seattle");
  const [cityName, setCityName] = React.useState("Seattle");
  const [weatherData, setWeatherData] = React.useState({});
  const [error, setError] = React.useState(false);

  const inputHandler = (event) => {
        setInputCity(event.target.value);
  };
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${process.env.REACT_APP_API_KEY}`

  async function fetchData(URL) {

    const response = await fetch(URL);
    const data = await response.json();

    if(data.cod === "404") {
      setError(true);
    } else {
      setWeatherData(data);
    }
    console.log(data);
  };

 React.useEffect(() => {
  fetchData(URL);
 }, [URL]);

  const submitHandler = (event) => {
    event.preventDefault();
    setError(false);
    setCityName(inputCity)
  };

  return (
    <div>
      <Header></Header>
      <InputCity  city={inputCity} onInputHandler={inputHandler} onSubmitHandler={submitHandler}></InputCity>
      {error ? (
        <h3 className='no_weather_data error'>
          No data found :(
        </h3>
        ) : (
          <ShowWeather data={weatherData}></ShowWeather>
        )}
    </div>
  )
}

export default App
