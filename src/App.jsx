import React, { useEffect, useState } from "react";
import VideoLists from "./components/videoList/VideoLists";
import TopNavBar from "./components/navgation/TopNavBar";

function App({ themovie }) {
  const [videos, setVideos] = useState([]);
  const search = (query) => {
    themovie
      .search(query) //
      .then((search) => setVideos(search));
  };

  useEffect(() => {
    themovie //
      .mostPopular()
      .then((popular) => setVideos(popular));
  });
  return (
    <>
      <TopNavBar onSearch={search} />
      <VideoLists videos={videos} />
    </>
  );
}

export default App;
