import React, { useRef, useEffect } from "react";
import Plyr from "plyr";
import contents from "../data/contents.json";
const VideoPlayer = ({ videoUrl }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    const player = new Plyr(videoRef.current, {
      debug: true,
      poster:
        "https://girishboke.github.io/day01/assets/media/video-poster.jpg",
      controls: [
        "play-large",
        "play",
        "progress",
        "current-time",
        "mute",
        "volume",
        "captions",
        "settings",
        "pip",
        "airplay",
        "fullscreen",
      ],
      muted: true,
      autoplay: true,
      settings: ["captions", "quality", "speed", "loop"],
    });
    player.source = contents;

    return () => {
      player.destroy();
    };
  }, []);

  return (
    <div>
      <div ref={videoRef}></div>
    </div>
  );
};

export default VideoPlayer;
