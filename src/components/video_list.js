import React from 'react';
import VideoListItem from './video_list_item';

const VideoList = (props) => {
    const videoItems = props.videos.map((video) => {
        return <VideoListItem video={video} />
    })


    return (
        <ul>
            {videoItems}
        </ul>
    );
};

export default VideoList;


/*
This component doesn't have a need for state. it doens't record any user interaction or render itself.
so it will be purely presentational.





Making lists using map
we have to build a loop using map.

a map is the property of an array. the map is gonna return a new array.

go to videolistitem






 */