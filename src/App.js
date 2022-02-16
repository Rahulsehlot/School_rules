import { useState, useEffect } from "react";
import Intro from "./Scenes/intro/Intro";
import GameContainer from "./utils/GameContainer";
import Router from "./utils/Router";
import "./styles/app.css";
import Scene2 from "./Scenes/Scene2-Body/Scene2";
import Game1 from "./Scenes/Game1Screen/Game1";
import Scene3Organs from "./Scenes/Scene3Organs/Scene3Organs";
import Scene4 from "./Scenes/Scene4-Body/Scene4";
import Game1_Helper from "./Scenes/Game1Screen/Game1_helperScreen";
import Scene5 from "./Scenes/Scene5-Body/Scene5";
import Game2 from "./Scenes/Game2Screen/Game2";
import Scene6 from "./Scenes/Scene6-Body/Scene6";
import { AudioPlayer2 } from "./utils/loadAudio";
import { LoadImage } from "./utils/loadImage";

function App() {
  const [Load, setLoad] = useState(true);
  const [next, setNext] = useState(0);
  const [counter, setCounter] = useState(6);
  const [Organcounter, setOrganCounter] = useState(0);
  const [G2Ans, setG2Ans] = useState(5);
  const [G2Wrng, setG2Wrng] = useState(31);
  const [mute, setmute] = useState(false);
  const [BG_sound, setBG_sound] = useState(null);
  const [icon1, seticon1] = useState(null);
  const [icon2, seticon2] = useState(null);
  const [countdownSound, SetcountdownSound] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
    loadAudio();
  }, []);

  const loadAudio = async () => {
    SetcountdownSound(await AudioPlayer2("internal/sounds/countdown.mp3"));
    setBG_sound(await AudioPlayer2("internal/sounds/bg_sound.mp3"));
    seticon1(await LoadImage("internal/images/sound.svg"));
    seticon2(await LoadImage("internal/images/nosound.svg"));
  };

  useEffect(() => {
    if (BG_sound !== null) {
      BG_sound?.play();
    }
  }, [BG_sound]);

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
      {!mute && (
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
      <Router sceneId="/Eyes_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={4}
          soundId={4}
          position={"Eyes_position"}
          PropId={["6"]}
          scenename={"Scene3"}
        />
      </Router>
      <Router sceneId="/Nose_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={0}
          soundId={0}
          PropId={["7", "8"]}
          position={"Nose_position"}
          scenename={"Scene3"}
        />
      </Router>
      <Router sceneId="/Tongue_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={1}
          soundId={1}
          PropId={["9", "10", "11"]}
          position={"Tongue_position"}
          scenename={"Scene3"}
        />
      </Router>
      <Router sceneId="/Ears_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={2}
          soundId={2}
          PropId={["12", "13", "14"]}
          position={"Ears_position"}
          scenename={"Scene3"}
        />
      </Router>
      <Router sceneId="/Skin_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={3}
          soundId={3}
          PropId={["15", "16"]}
          position={"Skin_position"}
          scenename={"Scene3"}
        />
      </Router>
      <Router sceneId="/Scene4">
        <Scene4 />
      </Router>
      <Router sceneId="/Scene5">
        <Scene5 />
      </Router>
      <Router sceneId="/Scene6">
        <Scene6
          setCounter={setCounter}
          setG2Ans={setG2Ans}
          setNext={setNext}
          setG2Wrng={setG2Wrng}
        />
      </Router>
      <Router sceneId="/Eye_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Eye"}
          flowCount={0}
          countdownSound={countdownSound}
        />
      </Router>
      <Router sceneId="/Nose_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Nose"}
          flowCount={1}
          countdownSound={countdownSound}
        />
      </Router>
      <Router sceneId="/Ear_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Ear"}
          flowCount={2}
          countdownSound={countdownSound}
        />
      </Router>
      <Router sceneId="/Tongue_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Tongue"}
          flowCount={3}
          countdownSound={countdownSound}
        />
      </Router>
      <Router sceneId="/Skin_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Skin"}
          flowCount={4}
          countdownSound={countdownSound}
        />
      </Router>
      <Router sceneId="/Game1">
        <Game1
          counter={counter}
          setCounter={setCounter}
          scenename={"Scene2"}
          countdownSound={countdownSound}
        />
      </Router>
      <Router sceneId="/Game1_Helper">
        <Game1_Helper
          counter={counter}
          setCounter={setCounter}
          scenename={"Scene2"}
          countdownSound={countdownSound}
        />
      </Router>
    </GameContainer>
  );
}

export default App;
