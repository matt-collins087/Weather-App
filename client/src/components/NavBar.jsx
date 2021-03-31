import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const NavBar = ({ setCityPlaceHolder, setCity, getWeatherByCity, cityPlaceHolder, setStateCode, city, stateCode }) => {

  const findCityState = (string) => {
    let array = string.split(',');
    setCity(array[0]);
    setStateCode(array[1]);
  }

  return (
    <div className="nav-bar">
      <div className="icon">
        <img src="/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/weatherlab.png"></img>
        <h3>Weather Lab</h3>
      </div>
      <div className="search-bar-container">
        <input id="auto-complete" className="search-bar" type="search" placeholder="Enter City..." required onChange={(e) => { setCityPlaceHolder(e.target.value) }}
        />
        <button className="search-submit" onClick={(e) => {
          findCityState(cityPlaceHolder)
          getWeatherByCity(city, stateCode);
        }}>
        </button>
      </div>
      <div className="drop-down">
        <img src="/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/globe.png"></img>
        <select>
          <option value="F">&#xb0;F</option>
          <option value="C">&#xb0;C</option>
        </select>
      </div>
    </div>
  )
}

export default NavBar;