import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import API_KEY from '/config.js';
import SearchBar from './SearchBar.jsx';

const App = () => {

  const getWeatherByCity = (city) => {
    axios.get(`https://api.openweathermap.org/data/2.5/weather?appid=${API_KEY}`, {
      // headers: {
      //   'Authorization': API_KEY
      // },
      params: {
        // apiid: API_KEY,
        q: 'Austin',
        units: 'imperial'
      }
    })
    .then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    })
  }

  getWeatherByCity('Austin');

  return (
    <div>
      <h1>Weather Page</h1>
      <SearchBar />
    </div>
  )
}

export default App;