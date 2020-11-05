import React from "react";
import styled from "styled-components";

export default function VideoItem({ video }) {
  //   console.log(video);
  // 객체 비구조화
  const {
    snippet: {
      title,
      thumbnails: {
        default: { url },
      },
    },
  } = video;

  return (
    <>
      <ListGrid>
        <h4>{title}</h4>
        <img src={url} alt="thumbnails" />
      </ListGrid>
    </>
  );
}

const ListGrid = styled.div`
  width: 400px;
  border: 1px solid crimson;
`;
