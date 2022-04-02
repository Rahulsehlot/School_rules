import { useState, useEffect, useContext } from "react";
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer";
import Router from "./utils/Router";
import "./styles/app.css";
import Scene2 from "./Scenes/Scene2-Body/Scene2";
import Game2 from "./Scenes/Game2Screen/Game2";
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
import Scene4Map from "./Scenes/Scene4-Body/Scene4Map";
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
import Scene5Map from "./Scenes/Scene5-Body/Scene5AssetMap";
import Scene5 from "./Scenes/Scene5-Body/Scene5";
import Scene5AssetMapScreen1 from "./Scenes/Traces/Scene5Trace1";
import Scene6 from "./Scenes/Scene6/Scene6";
import Scene5AssetMapScreen3 from "./Scenes/Traces/Scene5Trace3";
import Scene5AssetMapScreen2 from "./Scenes/Traces/Scene5Trace2";
import Scene5AssetMapScreen4 from "./Scenes/Traces/Scene5Trace4";
import Scene5AssetMapScreen5 from "./Scenes/Traces/Scene5Trace5";
import Scene5AssetMapScreen6 from "./Scenes/Traces/Scene5Trace6";
import Scene7Map from "./Scenes/Scene7/Scene7Map";
import Scene7 from "./Scenes/Scene7/Scene7";
import Game2Trace1Map from "./Scenes/Traces/Game2Trace1";
import Game2Trace2Map from "./Scenes/Traces/Game2Trace2";
import Game2Trace3Map from "./Scenes/Traces/Game2Trace3";
import Game2Trace4Map from "./Scenes/Traces/Game2Trace4";
import Scene8Map from "./Scenes/Scene8/Scene8Map";
import Scene8 from "./Scenes/Scene8/Scene8";
import Scene9 from "./Scenes/Scene9/Scene9";
import Scene9AssetMapScreen4 from "./Scenes/Traces/Scene9trace4";
import Scene9AssetMapScreen2 from "./Scenes/Traces/Scene9trace2";
import Scene9AssetMapScreen3 from "./Scenes/Traces/Scene9trace3";
import Scene9AssetMapScreen5 from "./Scenes/Traces/Scene9trace5";
import Scene10 from "./Scenes/Scene10/Scene10";
import Scene10Map from "./Scenes/Scene10/Scene10Trace";
import Game3 from "./Scenes/Game3Screen/Game3";
import Game3Trace2Map from "./Scenes/Traces/Game3Trace2";
import Game3Trace3Map from "./Scenes/Traces/Game3Trace3";
import Game3Trace4Map from "./Scenes/Traces/Game3Trace4";
import Game3Trace5Map from "./Scenes/Traces/Game3Trace5";
import Game3Trace6Map from "./Scenes/Traces/Game3Trace6";
import Game3Trace7Map from "./Scenes/Traces/Game3Trace7";
import WellDone1 from "./Scenes/WellDone/WellDone1";
import { SceneContext } from "./contexts/SceneContext";

function App() {
  const { Bg, Loading } = useLoadAsset(IntroMap);

  const { SceneId } = useContext(SceneContext);

  const [Load, setLoad] = useState(true);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [playing, setplaying] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    loadAudio();
  }, []);

  const loadAudio = async () => {
    setBG_sound(await AudioPlayer2("internal/sounds/bg_sound.mp3"));
    seticon1(await LoadImage("internal/images/sound.svg"));
    seticon2(await LoadImage("internal/images/nosound.svg"));
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

  if (Load) return <div className="intro_Loading_screen">Loading....</div>;

  return (
    <GameContainer>
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
        <Intro />
      </Router>
      <Router sceneId="/Scene2">
        <Scene2 scenename={"Scene2"} />
      </Router>
      <Router sceneId="/Scene3_1">
        <Scene3
          scenename={"Scene3_2"}
          prevScene={"Scene3_1"}
          assetID={"Scene3screen1"}
          preLoad={Scene3AssetMapScreen2}
          picture_Id={0}
          hide={1}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene3_2">
        <Scene3
          scenename={"Scene3_3"}
          prevScene={"Scene3_1"}
          assetID={"Scene3Screen2"}
          picture_Id={1}
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
          picture_Id={2}
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
          picture_Id={3}
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
          picture_Id={4}
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
          picture_Id={5}
          preLoad={Scene3AssetMapScreen7}
          hide={0}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene3_7">
        <Scene3
          scenename={"Scene4"}
          picture_Id={6}
          prevScene={"Scene3_6"}
          assetID={"Scene3Screen7"}
          preLoad={Scene4Map}
          hide={0}
          hideNxt={1}
        />
      </Router>
      <Router sceneId="/Scene4">
        <Scene4
          scenename={"Scene3_7"}
          assetID={"Scene3Screen6"}
          preLoad={Game1Trace1Map}
        />
      </Router>
      <Router sceneId="/Game1Screen1">
        <Game1
          scenename={"Game1Screen2"}
          assetID={"Game1Trace1"}
          preLoad={Game1Trace2Map}
          soundID={0}
        />
      </Router>
      <Router sceneId="/Game1Screen2">
        <Game1
          scenename={"Game1Screen3"}
          assetID={"Game1Trace2"}
          preLoad={Game1Trace3Map}
          soundID={1}
        />
      </Router>
      <Router sceneId="/Game1Screen3">
        <Game1
          scenename={"Game1Screen4"}
          assetID={"Game1Trace3"}
          preLoad={Game1Trace4Map}
          soundID={2}
        />
      </Router>
      <Router sceneId="/Game1Screen4">
        <Game1
          scenename={"Game1Screen5"}
          assetID={"Game1Trace4"}
          preLoad={Game1Trace5Map}
          soundID={3}
        />
      </Router>
      <Router sceneId="/Game1Screen5">
        <Game1
          scenename={"Game1Screen6"}
          assetID={"Game1Trace5"}
          preLoad={Game1Trace6Map}
          soundID={4}
        />
      </Router>
      <Router sceneId="/Game1Screen6">
        <Game1
          scenename={"Game1Screen7"}
          assetID={"Game1Trace6"}
          preLoad={Game1Trace7Map}
          soundID={5}
        />
      </Router>
      <Router sceneId="/Game1Screen7">
        <Game1
          scenename={"Game1Screen8"}
          assetID={"Game1Trace7"}
          preLoad={Game1Trace8Map}
          soundID={6}
        />
      </Router>
      <Router sceneId="/Game1Screen8">
        <Game1
          scenename={"Game1Screen9"}
          assetID={"Game1Trace8"}
          preLoad={Game1Trace9Map}
          soundID={7}
        />
      </Router>
      <Router sceneId="/Game1Screen9">
        <Game1
          scenename={"Game1Screen10"}
          assetID={"Game1Trace9"}
          preLoad={Game1Trace10Map}
          soundID={8}
        />
      </Router>
      <Router sceneId="/Game1Screen10">
        <Game1
          scenename={"Game1Screen11"}
          assetID={"Game1Trace10"}
          preLoad={Game1Trace11Map}
          soundID={9}
        />
      </Router>
      <Router sceneId="/Game1Screen11">
        <Game1
          scenename={"WellDone1"}
          assetID={"Game1Trace11"}
          preLoad={WellDoneMap}
          soundID={10}
        />
      </Router>
      <Router sceneId="/WellDone1">
        <WellDone scenename={"Scene5"} assetID={"WellDone"} soundID={10} />
      </Router>
      <Router sceneId="/Scene5">
        <Scene5 soundID={10} />
      </Router>
      <Router sceneId="/Scene5_1">
        <Scene6
          scenename={"Scene5_2"}
          prevScene={"Scene5_1"}
          assetID={"Scene5screen1"}
          picture_Id={5}
          preLoad={Scene5AssetMapScreen2}
          hide={1}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene5_2">
        <Scene6
          scenename={"Scene5_3"}
          prevScene={"Scene5_1"}
          assetID={"Scene5screen2"}
          picture_Id={5}
          preLoad={Scene5AssetMapScreen3}
          hide={0}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene5_3">
        <Scene6
          scenename={"Scene5_4"}
          prevScene={"Scene5_2"}
          assetID={"Scene5screen3"}
          picture_Id={5}
          preLoad={Scene5AssetMapScreen4}
          hide={0}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene5_4">
        <Scene6
          scenename={"Scene5_5"}
          prevScene={"Scene5_3"}
          assetID={"Scene5screen4"}
          picture_Id={5}
          preLoad={Scene5AssetMapScreen5}
          hide={0}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene5_5">
        <Scene6
          scenename={"Scene5_6"}
          prevScene={"Scene5_4"}
          assetID={"Scene5screen5"}
          picture_Id={5}
          preLoad={Scene5AssetMapScreen6}
          hide={0}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene5_6">
        <Scene6
          scenename={"Scene7"}
          prevScene={"Scene5_5"}
          assetID={"Scene5screen6"}
          picture_Id={5}
          preLoad={Scene7Map}
          hide={0}
          hideNxt={1}
        />
      </Router>
      <Router sceneId="/Scene7">
        <Scene7 assetID={"scene7"} />
      </Router>
      <Router sceneId="/Game2Screen1">
        <Game2
          scenename={"Game2Screen2"}
          preLoad={Game2Trace2Map}
          assetID={"Game2Trace1"}
        />
      </Router>
      <Router sceneId="/Game2Screen2">
        <Game2
          preLoad={Game2Trace3Map}
          scenename={"Game2Screen3"}
          assetID={"Game2Trace2"}
        />
      </Router>
      <Router sceneId="/Game2Screen3">
        <Game2
          assetID={"Game2Trace3"}
          preLoad={Game2Trace4Map}
          scenename={"Game2Screen4"}
        />
      </Router>
      <Router sceneId="/Game2Screen4">
        <Game2
          assetID={"Game2Trace4"}
          preLoad={Scene8Map}
          scenename={"Scene8"}
        />
      </Router>
      <Router sceneId="/Scene8">
        <Scene8 assetID={"scene8"} />
      </Router>
      <Router sceneId="/Scene9Screen1">
        <Scene9
          scenename={"Scene9Screen2"}
          prevScene={"Scene9Screen1"}
          assetID={"Scene9screen1"}
          preLoad={Scene9AssetMapScreen2}
          hide={1}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene9Screen2">
        <Scene9
          scenename={"Scene9Screen3"}
          prevScene={"Scene9Screen1"}
          assetID={"Scene9screen2"}
          preLoad={Scene9AssetMapScreen3}
          hide={0}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene9Screen3">
        <Scene9
          scenename={"Scene9Screen4"}
          prevScene={"Scene9Screen2"}
          assetID={"Scene9screen3"}
          preLoad={Scene9AssetMapScreen4}
          hide={0}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene9Screen4">
        <Scene9
          scenename={"Scene9Screen5"}
          prevScene={"Scene9Screen3"}
          assetID={"Scene9screen4"}
          preLoad={Scene9AssetMapScreen5}
          hide={0}
          hideNxt={0}
        />
      </Router>
      <Router sceneId="/Scene9Screen5">
        <Scene9
          scenename={"Scene10"}
          prevScene={"Scene9Screen4"}
          assetID={"Scene9screen5"}
          preLoad={Scene10Map}
          hide={0}
          hideNxt={1}
        />
      </Router>
      <Router sceneId="/Scene10">
        <Scene10 assetID={"scene10"} />
      </Router>
      <Router sceneId="/Game3Screen1">
        <Game3
          assetID={"Game3Trace1"}
          preLoad={Game3Trace2Map}
          scenename={"Game3Screen2"}
        />
      </Router>
      <Router sceneId="/Game3Screen2">
        <Game3
          assetID={"Game3Trace2"}
          preLoad={Game3Trace3Map}
          scenename={"Game3Screen3"}
        />
      </Router>
      <Router sceneId="/Game3Screen3">
        <Game3
          assetID={"Game3Trace3"}
          preLoad={Game3Trace4Map}
          scenename={"Game3Screen4"}
        />
      </Router>
      <Router sceneId="/Game3Screen4">
        <Game3
          assetID={"Game3Trace4"}
          preLoad={Game3Trace5Map}
          scenename={"Game3Screen5"}
        />
      </Router>
      <Router sceneId="/Game3Screen5">
        <Game3
          assetID={"Game3Trace5"}
          preLoad={Game3Trace6Map}
          scenename={"Game3Screen6"}
        />
      </Router>
      <Router sceneId="/Game3Screen6">
        <Game3
          assetID={"Game3Trace6"}
          preLoad={Game3Trace7Map}
          scenename={"Game3Screen7"}
        />
      </Router>
      <Router sceneId="/Game3Screen7">
        <Game3
          assetID={"Game3Trace7"}
          preLoad={Game3Trace3Map}
          scenename={"WellDone2"}
        />
      </Router>
      <Router sceneId="/WellDone2">
        <WellDone1 assetID={"WellDone"} />
      </Router>
    </GameContainer>
  );
}

export default App;
