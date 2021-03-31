import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const DailyWeather = ({ day }) => {


  return (
    <div className="day-tile">
      <h3><u>{moment.unix(day.dt).format("dddd")}</u></h3>
      <h4>{moment.unix(day.dt).format("MMM DD")}</h4>
      <img src={`/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/${day.weather[0].main}.png`}></img>
      <h4>H: {Math.round(day.temp.max)}&#xb0;</h4>
      <h4>L: {Math.round(day.temp.min)}&#xb0;</h4>
    </div>
  )
}

export default DailyWeather;