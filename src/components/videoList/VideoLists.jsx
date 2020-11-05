import React from "react";
import VideoItem from "../videoItem/VideoItem";
import styled from "styled-components";

const VideoLists = (props) => {
  return (
    <Container>
      {props.videos.map((video) => (
        <VideoItem key={video.id} video={video} />
      ))}
    </Container>
  );
};

const Container = styled.div`
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
`;

export default VideoLists;
