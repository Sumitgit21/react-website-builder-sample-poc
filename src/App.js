// import Plyr from "plyr-react";
import React, { useEffect, useRef } from "react";
import Plyr from "plyr";
// import "../node_modules/plyr/src/sass/plyr.scss";
// import "plyr-react/plyr.css";
import contents from "./data/contents.json";
import VideoPlayer from "./components/VideoPlayer";
// import ReactEditor from "./components/ReactEditor";
import EmailEditor from "./components/EmailEditor";
import ReactEmailEditor from "./components/EmailEditor";
import Grapes from "./components/Grapes";
import OverviewFlow from "./components/OverviewFlow";

function App() {
  const plyrProps = {
    source: contents.sources, // https://github.com/sampotts/plyr#the-source-setter
    options: {}, // https://github.com/sampotts/plyr#options
    // Direct props for inner video tag (mdn.io/video)
  };

  useEffect(() => {
    const supported = Plyr.supported("video", "html5");
    // console.log("supported" + supported);
    // document.getElementById("player")
    // const player = new Plyr(document.getElementById("player"), {
    //   // enabled: true,
    //   debug: true,
    //   poster:
    //     "https://girishboke.github.io/day01/assets/media/video-poster.jpg",
    //   controls: [
    //     "play-large",
    //     "play",
    //     "progress",
    //     "current-time",
    //     "mute",
    //     "volume",
    //     "captions",
    //     "settings",
    //     "pip",
    //     "airplay",
    //     "fullscreen",
    //   ],
    //   muted: true,
    //   // autopause: true,
    //   autoplay: true,
    //   settings: ["captions", "quality", "speed", "loop"],
    // });
    // player.source = contents;
    // player.ads = {
    //   enabled: true,
    //   tagUrl:
    //     "https://pubads.g.doubleclick.net/gampad/ads?iu=/21775744923/external/single_ad_samples&sz=640x480&cust_params=sample_ct%3Dlinear&ciu_szs=300x250%2C728x90&gdfp_req=1&output=vast&unviewed_position_start=1&env=vp&impl=s&correlator=",
    // };

    // player.on("ready", (event) => {
    //   const instance = event.detail.plyr;
    //   // player.currentTime = 10;
    //   console.log("player ready", instance);
    //   // player.play();
    // });

    //   return () => {};
  }, []);

  return (
    <div className="app">
      {/* <OverviewFlow /> */}
      <Grapes />
      {/* <ReactEmailEditor /> */}
      {/* <VideoPlayer videoUrl="https://content.jwplatform.com/manifests/vM7nH0Kl.m3u8" /> */}
    </div>
  );
}

export default App;
