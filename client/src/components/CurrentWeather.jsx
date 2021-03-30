import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const CurrentWeather = ({ current, city, daily }) => {
  return (
    <div className="current-weather-container">
      <div className="current-weather-temp">
        <h4>{city} Weather</h4>
        <h4 className="as-of">as of {moment.unix(current.dt).format("h:mma")}</h4>
        <h1>{Math.round(current.temp)}&#xb0;</h1>
        <h4>{current.weather[0].description}</h4>
        <h4>{Math.round(daily.wind_speed)}mph<img src={`/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/wind.png`}></img></h4>
      </div>

      <div className="current-weather-image">
        <img src={`/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/${daily.weather[0].main}.png`}></img>
        <h3>{Math.round(daily.temp.max)}&#xb0;/{Math.round(daily.temp.min)}&#xb0;</h3>
      </div>
    </div>
  )
}

export default CurrentWeather;