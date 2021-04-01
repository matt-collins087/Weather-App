import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import API_KEY from '/config.js';
import NavBar from './NavBar.jsx'
import DailyWeather from './DailyWeather.jsx';
import CurrentWeather from './CurrentWeather.jsx';
import HourlyWeather from './HourlyWeather.jsx';
import TopStories from './TopStories.jsx';


const App = () => {
  const [weatherByCity, setWeatherByCity] = useState({});
  const [city, setCity] = useState('Austin');
  const [units, setUnits] = useState('imperial');
  const [cityPlaceHolder, setCityPlaceHolder] = useState('');
  const [stateCode, setStateCode] = useState('Texas');
  console.log(weatherByCity);

  const getWeatherByCity = (city, units) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`, {
      params: {
        q: city,
        units: units
      }
    })
      .then(response => {
        let lat = response.data.coord.lat
        let lon = response.data.coord.lon
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${units}&exclude=minutely&appid=${API_KEY}`)
          .then(response => {
            setWeatherByCity(response.data);
          })
      })

      .catch(error => {
        console.log(error);
      })
  }

  useEffect(() => {
    getWeatherByCity(city, units);
  }, [city, units])


  return (
    <div>
      <div class="flier">
        <img className="rocket" src="/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/ufo.png"></img>
      </div>
      <NavBar
        setCity={setCity}
        setCityPlaceHolder={setCityPlaceHolder}
        getWeatherByCity={getWeatherByCity}
        cityPlaceHolder={cityPlaceHolder}
        setStateCode={setStateCode}
        city={city}
        stateCode={stateCode}
        setUnits={setUnits}
        units={units}
      />
      {weatherByCity.current ? <CurrentWeather
        current={weatherByCity.current}
        daily={weatherByCity.daily[0]}
        city={city}
        stateCode={stateCode}
        />
        : null}

      {weatherByCity.daily ? <HourlyWeather current={weatherByCity.current} daily={weatherByCity.daily[0]} city={city} /> : null}
        <h1 className="eight-day-forecast">8 Day Forecast</h1>
      <div className="daily-forecast">
        {weatherByCity.daily ? weatherByCity.daily.map((day, index) => {
          return <DailyWeather day={day} key={index} />
        }) : null}
      </div>
        <TopStories />
    </div>
  )
}

export default App;