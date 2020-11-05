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
  padding-top: 70px;
  justify-content: center;
  align-items: flex-end;
  width: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
`;

export default VideoLists;
