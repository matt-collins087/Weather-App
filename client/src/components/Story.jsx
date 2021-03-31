import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

const Story = ({story}) => {
  return (
    <div className="story-container">
      <a target="_blank" href={`${story.short_url}`}>
      <img src={`${story.multimedia[0].url}`}></img>
      <p>{story.title}</p>
      </a>
    </div>
  )
}

export default Story;