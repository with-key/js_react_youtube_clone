import React from "react";
import VideoItem from "../videoItem/VideoItem";
import styled from "styled-components";

const VideoLists = ({ videos }) => {
  return (
    <Container>
      {videos.map((video) => (
        <VideoItem video={video} key={video.id} />
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
