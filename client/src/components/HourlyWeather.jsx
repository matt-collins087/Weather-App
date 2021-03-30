import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const HourlyWeather = ({ daily, city }) => {
  return (
    <div className="hourly-temps-container">
      <h2>Today's forecast in {city}</h2>
      <div className="hourly-temps">
        <div className="morning">
          <h3>Morning</h3>
          <h2>{Math.round(daily.temp.morn)}&#xb0;</h2>
          <img src={`/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/${daily.weather[0].main}.png`}></img>
        </div>
        <div className="afternoon">
          <h3>Afternoon</h3>
          <h2>{Math.round(daily.temp.day)}&#xb0;</h2>
          <img src={`/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/${daily.weather[0].main}.png`}></img>
        </div>
        <div className="evening">
          <h3>Evening</h3>
          <h2>{Math.round(daily.temp.eve)}&#xb0;</h2>
          <img src={`/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/${daily.weather[0].main}.png`}></img>
        </div>
        <div className="night">
          <h4>Overnight</h4>
          <h2>{Math.round(daily.temp.night)}&#xb0;</h2>
          <img src={`/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/${daily.weather[0].main}.png`}></img>
        </div>


      </div>
    </div>
  )
}

export default HourlyWeather;