import React, { useState, useRef } from "react";
import YouTube from "react-youtube";

const VideoPlayer = ({ videoId }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef(null);

  const opts = {
    height: "300",
    width: "100%",
    playerVars: {
      autoplay: 0,
    },
  };

  const onReady = (event) => {
    playerRef.current = event.target;
  };

  const handleMouseMove = () => {
    if (!isPlaying) {
      setIsPlaying(true);
      playerRef.current.playVideo();
    }
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setIsPlaying(false);
      playerRef.current.pauseVideo();
    }
  };

  return (
    <div wonMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
      <YouTube videoId={videoId} opts={opts} onReady={onReady} />
    </div>
  );
};

export default VideoPlayer;
