import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import API_KEY from '/config1.js';
import Story from './Story.jsx';

const TopStories = () => {
  const [news, setNews] = useState([]);

  const getTopStories = () => {
    axios.get(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${API_KEY}`)
      .then(response => {
        let array = [];
        for (let i = 0; i < 4; i++) {
          array.push(response.data.results[i])
        }
        setNews(array);
      })
  }

  useEffect(() => {
    getTopStories();
  }, [])

  return (
    <div className="top-container">
      <h2>Top News Stories in the US</h2>
      <div className="top-stories-container">
        {news.map((story, index) => {
          return <Story story={story} key={index} />
        })}
      </div>
    </div>
  )
}

export default TopStories;