import React, { useEffect, useState } from "react";
import VideoLists from "./components/videoList/VideoLists";

function App() {
  const [videos, setVideos] = useState([]);
  // tsst
  // 마운트가 됐을 때만 호출됨 , [] <- 업데이트 할 때 호출하고자 하는 것을 여기에 넣으면 된다
  useEffect(() => {
    const requestOptions = {
      method: "GET",
      redirect: "follow",
    };

    fetch(
      "https://youtube.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=25&key=AIzaSyBUUKPrd6nofClumYQbMSPqFasVzXhNqd8",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => setVideos(result.items))
      .catch((error) => console.log("error", error));
  }, []);

  return (
    <>
      <VideoLists videos={videos} />
    </>
  );
}

export default App;
