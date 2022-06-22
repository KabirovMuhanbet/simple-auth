import React from "react";
import YouTube from "react-youtube";

const Player = () => {

  const opts = {
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (e) => {
    e.target.pauseVideo();
  };
  return (
    <div className="player">
      <YouTube videoId="_kA2fQb6IdE" opts={opts} onReady={onReady} iframeClassName={"video"} />
    </div>
  );
};

export default Player;
