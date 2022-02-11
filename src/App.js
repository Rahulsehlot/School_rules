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

function App() {
  const [Load, setLoad] = useState(true);
  const [next, setNext] = useState(0);
  const [counter, setCounter] = useState(6);
  const [Organcounter, setOrganCounter] = useState(0);
  const [G2Ans, setG2Ans] = useState(5);
  const [G2Wrng, setG2Wrng] = useState(0);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 3000);
  }, []);

  if (Load) return <div className="intro_Loading_screen">Loading....</div>;

  return (
    <GameContainer>
      <Router sceneId="/">
        <Intro />
      </Router>
      <Router sceneId="/Scene2">
        <Scene2 />
      </Router>
      <Router sceneId="/Eyes_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={4}
          soundId={4}
          position={"Eyes_position"}
          PropId={["6"]}
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
        />
      </Router>
      <Router sceneId="/Skin_Scene3">
        <Scene3Organs
          next={next}
          setNext={setNext}
          imageId={3}
          soundId={3}
          PropId={["15", "16", "17"]}
          position={"Skin_position"}
        />
      </Router>

      <Router sceneId="/Scene4">
        <Scene4 />
      </Router>

      <Router sceneId="/Scene5">
        <Scene5 />
      </Router>

      <Router sceneId="/Scene6">
        <Scene6 />
      </Router>

      <Router sceneId="/Eye_Game2">
        <Game2
          G2Ans={G2Ans}
          setG2Ans={setG2Ans}
          G2Wrng={G2Wrng}
          setG2Wrng={setG2Wrng}
          G2answer={"Eye"}
          flowCount={0}
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
        />
      </Router>

      <Router sceneId="/Game1">
        <Game1 counter={counter} setCounter={setCounter} />
      </Router>

      <Router sceneId="/Game1_Helper">
        <Game1_Helper counter={counter} setCounter={setCounter} />
      </Router>
    </GameContainer>
  );
}

export default App;
