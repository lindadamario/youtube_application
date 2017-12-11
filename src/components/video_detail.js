import React from 'react';


const VideoDetail = ({video}) => {
    if(!video) {
        return <div>Loading...</div>;
    }

    const videoId = video.id.videoId;
    const url = `https://youtube.com/embed/${videoId}`;

    return(
        <div className="videoDetail">
            <div>
                <iframe src={url}></iframe>
            </div>
            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    );
};


export default VideoDetail;