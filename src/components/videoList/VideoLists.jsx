import React from "react";
import VideoItem from "../videoItem/VideoItem";

const VideoLists = (props) => {
  return (
    <ul>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </ul>
  );
};

export default VideoLists;
