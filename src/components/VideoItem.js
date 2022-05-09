import './VideoItem.css';
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
  return (
    <div className="item video-item" onClick={() => onVideoSelect(video)}>
      <img alt={video.snippet.title} className="ui image" src={video.snippet.thumbnails.medium.url} />
      <div className="content">
        <h4 className="header">>{video.snippet.title}</h4>
      </div>
    </div>
    )
}

export default VideoItem;