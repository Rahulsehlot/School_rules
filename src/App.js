import { useState, useEffect, useContext } from "react";
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer";
import Router from "./utils/Router";
import "./styles/app.css";
import { AudioPlayer2 } from "./utils/loadAudio";
import { LoadImage } from "./utils/loadImage";
import useLoadAsset from "./utils/useLoadAsset";
import Scene3 from "./Scenes/Scene3/Scene3";
import IntroMap from "./Scenes/intro/AssetMap";
import Scene3AssetMapScreen2 from "./Scenes/Traces/Scene2Trace2";
import Scene3AssetMapScreen3 from "./Scenes/Traces/Scene2Trace3";
import Scene3AssetMapScreen4 from "./Scenes/Traces/Scene2Trace4";
import Scene3AssetMapScreen5 from "./Scenes/Traces/Scene2Trace5";
import Scene3AssetMapScreen6 from "./Scenes/Traces/Scene2Trace6";
import Scene3AssetMapScreen7 from "./Scenes/Traces/Scene2Trace7";
import Scene4 from "./Scenes/Scene4-Body/Scene4";
import Game1 from "./Scenes/Game1Screen/Game1";
import Game1Trace1Map from "./Scenes/Traces/Game1Trace1";
import Game1Trace2Map from "./Scenes/Traces/Game1Trace2";
import Game1Trace3Map from "./Scenes/Traces/Game1Trace3";
import Game1Trace4Map from "./Scenes/Traces/Game1Trace4";
import Game1Trace5Map from "./Scenes/Traces/Game1Trace5";
import Game1Trace6Map from "./Scenes/Traces/Game1Trace6";
import Game1Trace7Map from "./Scenes/Traces/Game1Trace7";
import Game1Trace8Map from "./Scenes/Traces/Game1Trace8";
import Game1Trace9Map from "./Scenes/Traces/Game1Trace9";
import Game1Trace10Map from "./Scenes/Traces/Game1Trace10";
import Game1Trace11Map from "./Scenes/Traces/Game1Trace11";
import WellDone from "./Scenes/WellDone/WellDone";
import WellDoneMap from "./Scenes/WellDone/WellDoneAssetMap";
import { SceneContext } from "./contexts/SceneContext";

function App() {
  const Asset = useLoadAsset(IntroMap);
  const [LandScape, setLandScape] = useState(false);
  const { SceneId, setheight } = useContext(SceneContext);

  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [playing, setplaying] = useState(false);
  const [count, setCount] = useState(0);
  const [s1, setS1] = useState("");
  const [aId, setaId] = useState("");

  const resizer = () => {
    setLandScape(window.innerWidth / window.innerHeight < 1.0);
    if (window.innerWidth <= 1264) {
      setheight("87%");
    } else {
      setheight("73%");
    }
  };

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);

    loadAudio();

    window.addEventListener("resize", resizer);
    return () => {
      window.removeEventListener("resize", resizer);
    };
  }, []);

  useEffect(() => {
    const shuffle_1 = Math.floor(0 + Math.random() * (2 - 0));
    const s1 = IntroMap?.shuffle[shuffle_1];
    const s2 = IntroMap?.shuffle_0[shuffle_1];
    setS1(IntroMap?.[s1]);
    setaId(IntroMap?.[s2]);
  }, [s1, aId]);

  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("ee03_ow_tnb_pl1/sounds/bg_sound.mp3"));
    seticon1(await LoadImage("ee03_ow_tnb_pl1/images/sound.svg"));
    seticon2(await LoadImage("ee03_ow_tnb_pl1/images/nosound.svg"));
  };

  useEffect(() => {
    if (BG_sound !== null && SceneId !== "/" && playing === false) {
      setplaying(true);
      BG_sound?.play();
    }
  }, [BG_sound, SceneId]);

  useEffect(() => {
    if (BG_sound) {
      if (mute) {
        BG_sound?.mute(true);
      } else {
        BG_sound?.mute(false);
      }
    }
  }, [mute]);

  const toggleMute = () => {
    setmute(!mute);
  };

  // if (Load) return <div className="intro_Loading_screen">Loading....</div>;

  // if (LandScape) {
  //   return <h1 id="landscapeMode">Rotate your device</h1>;
  // }

  if (Load && !Asset.Loading)
    return (
      <div className="loadingIndicator">
        <div className="vendorWrapper"></div>
        <div className="playerPreloader">
          <div className="playerPreloadCircle"></div>
        </div>
      </div>
    );

  return (
    <>
      <h1 style={{ display: LandScape ? "" : "none" }} id="landscapeMode">
        Rotate your device
      </h1>

      <div style={{ opacity: LandScape ? 0 : 1 }}>
        <GameContainer setLandScape={setLandScape} LandScape={LandScape}>
          <div className="imgTest"></div>
          <div className="imgTest1"></div>
          {!mute && SceneId !== "/" && (
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(icon1)}`}
              alt=""
              className="mute_btn"
              onClick={toggleMute}
            />
          )}
          {mute && (
            <img
              src={`data:image/svg+xml;utf8,${encodeURIComponent(icon2)}`}
              alt=""
              className="mute_btn"
              onClick={toggleMute}
            />
          )}{" "}
          <Router sceneId="/">
            <Intro s1={s1} setS1={setS1} aId={aId} setaId={setaId} />
          </Router>
          <Router sceneId="/Scene4">
            <Scene4 scenename={"Scene3_7"} assetID={"Scene3Screen6"} />
          </Router>
          <Router sceneId="/Scene3_1">
            <Scene3
              scenename={"Scene3_2"}
              prevScene={"Scene3_1"}
              assetID={"Scene3screen1"}
              preLoad={Scene3AssetMapScreen2}
              hide={1}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene3_2">
            <Scene3
              scenename={"Scene3_3"}
              prevScene={"Scene3_1"}
              assetID={"Scene3Screen2"}
              preLoad={Scene3AssetMapScreen3}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene3_3">
            <Scene3
              prevScene={"Scene3_2"}
              scenename={"Scene3_4"}
              assetID={"Scene3Screen3"}
              preLoad={Scene3AssetMapScreen4}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene3_4">
            <Scene3
              scenename={"Scene3_5"}
              prevScene={"Scene3_3"}
              assetID={"Scene3Screen4"}
              preLoad={Scene3AssetMapScreen5}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene3_5">
            <Scene3
              scenename={"Scene3_6"}
              prevScene={"Scene3_4"}
              assetID={"Scene3Screen5"}
              preLoad={Scene3AssetMapScreen6}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene3_6">
            <Scene3
              scenename={"Scene3_7"}
              prevScene={"Scene3_5"}
              assetID={"Scene3Screen6"}
              preLoad={Scene3AssetMapScreen7}
              hide={0}
              hideNxt={0}
            />
          </Router>
          <Router sceneId="/Scene3_7">
            <Scene3
              scenename={"Game1Screen1"}
              prevScene={"Scene3_6"}
              assetID={"Scene3Screen7"}
              preLoad={s1?.[0]}
              hide={0}
              hideNxt={1}
            />
          </Router>
          <Router sceneId="/Game1Screen1">
            <Game1
              scenename={"Game1Screen2"}
              assetID={aId?.[0]}
              preLoad={s1?.[1]}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game1Screen2">
            <Game1
              scenename={"Game1Screen3"}
              assetID={aId?.[1]}
              preLoad={s1?.[2]}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game1Screen3">
            <Game1
              scenename={"Game1Screen4"}
              assetID={aId?.[2]}
              preLoad={s1?.[3]}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game1Screen4">
            <Game1
              scenename={"Game1Screen5"}
              assetID={aId?.[3]}
              preLoad={s1?.[4]}
              soundID={3}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game1Screen5">
            <Game1
              scenename={"Game1Screen6"}
              assetID={aId?.[4]}
              preLoad={s1?.[5]}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game1Screen6">
            <Game1
              scenename={"Game1Screen7"}
              assetID={aId?.[5]}
              preLoad={s1?.[6]}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/Game1Screen7">
            <Game1
              scenename={"WellDone"}
              assetID={aId?.[6]}
              preLoad={WellDoneMap}
              count={count}
              setCount={setCount}
            />
          </Router>
          <Router sceneId="/WellDone">
            <WellDone assetID={"WellDone"} setCount={setCount} />
          </Router>
        </GameContainer>
      </div>
    </>
  );
}

export default App;
