import React from "react";
import styled from "styled-components";

export default function VideoItem({ video }) {
  return (
    <>
      <ListGrid>
        <img
          src={`https://image.tmdb.org/t/p/w220_and_h330_face${video.poster_path}`}
        />
        <div>{video.title}</div>
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
