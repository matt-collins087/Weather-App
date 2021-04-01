import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';

const NavBar = ({ setCityPlaceHolder, setCity, getWeatherByCity, cityPlaceHolder, setStateCode, city, stateCode, setUnits, units }) => {

  const findCityState = () => {
    let data = document.getElementById('autocomplete');
    let array = data.value.split(',');

    setCity(array[0]);
    setStateCode(array[1]);
  }


  return (
    <div className="nav-bar">
      <div className="icon">
        <img src="/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/logo.png"></img>
        <h3>Weather Lab</h3>
      </div>
      <div className="search-bar-container">
        <input id="autocomplete" className="search-bar" type="search" placeholder="Search City..." required/>
        <button className="search-submit" onClick={(e) => {
          findCityState()
          getWeatherByCity(city, units);
        }}>
        </button>
      </div>
      <div className="drop-down">
        <img src="/Users/mattix/Desktop/HRATX/MVP/Weather-App/client/dist/images/globe.png"></img>
        <select onChange={(e) => {setUnits(e.target.value)}}>
          <option value="imperial">&#xb0;F</option>
          <option value="metric">&#xb0;C</option>
        </select>
      </div>
    </div>
  )
}

export default NavBar;