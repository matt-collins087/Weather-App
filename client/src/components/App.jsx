import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import API_KEY from '/config.js';
import NavBar from './NavBar.jsx'
import DailyWeather from './DailyWeather.jsx';
import CurrentWeather from './CurrentWeather.jsx';
import HourlyWeather from './HourlyWeather.jsx';


const App = () => {
  const [weatherByCity, setWeatherByCity] = useState({});
  const [city, setCity] = useState('Austin');
  const [cityPlaceHolder, setCityPlaceHolder] = useState('');

  let test = '';

  console.log(weatherByCity)

  const getWeatherByCity = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`, {
      params: {
        q: city,
        units: 'imperial'
      }
    })
      .then(response => {
        let lat = response.data.coord.lat
        let lon = response.data.coord.lon
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=minutely&appid=${API_KEY}`)
          .then(response => {
            setWeatherByCity(response.data);
          })
      })

      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getWeatherByCity(city);
  }, [city])


  return (
    <div>
      <h1>Weather Lab</h1>
      <input type="search" onChange={(e) => { setCityPlaceHolder(e.target.value) }}></input>
      <input type="submit" onClick={(e) => {
        getWeatherByCity(cityPlaceHolder);
        setCity(cityPlaceHolder);
      }}>
      </input>
      {weatherByCity.current ? <CurrentWeather current={weatherByCity.current} daily={weatherByCity.daily[0]} city={city}/> : null}
      {weatherByCity.daily ? <HourlyWeather daily={weatherByCity.daily[0]} city={city}/> : null}
      <div className="daily-forecast">
        {weatherByCity.daily ? weatherByCity.daily.map((day, index) => {
          return <DailyWeather day={day} key={index} />
        }) : null}
      </div>
    </div>
  )
}

export default App;