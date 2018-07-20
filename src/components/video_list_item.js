import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {

  const imageUrl = video.snippet.thumbnails.default.url;
  return (
      <li onClick={() => onVideoSelect(video)}>
        <div>
          <div className="thumbnail_img">
            <img src={imageUrl} alt="" />
          </div>

          <div className="body">
            <h2>{video.snippet.title}</h2>
          </div>
        </div>
      </li>
  );
};

export default VideoListItem;






