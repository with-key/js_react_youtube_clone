import React from "react";

export default function VideoItem({ video }) {
  // 객체 비구조화
  const {
    snippet: { title },
  } = video;

  return <h1>{title}</h1>;
}
