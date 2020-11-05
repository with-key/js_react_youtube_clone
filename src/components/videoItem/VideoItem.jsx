import React from "react";
import styled from "styled-components";

export default function VideoItem({
  video: {
    snippet: {
      title,
      thumbnails: {
        medium: { url },
      },
    },
  },
}) {
  return (
    <>
      <ListGrid>
        <img src={url} alt="thumbnails" />
        <h5>{title}</h5>
      </ListGrid>
    </>
  );
}

const ListGrid = styled.div`
  box-sizing: border-box;
  transition: 200ms ease-in-out;
  border-radius: 10px;
  width: 600px;
  padding: 10px;
  display: flex;
  margin: 10px 0;
  img {
    margin-right: 20px;
  }
  :hover {
    transform: scale(1.05);
    box-shadow: 22px 14px 59px -52px rgba(0, 0, 0, 1);
  }
`;
