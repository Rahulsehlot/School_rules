import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Game1Map";
import lottie from "lottie-web";
import "../../styles/Game1.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Game1Trace1Map from "../Traces/Game1Trace1";
import Game1Trace2Map from "../Traces/Game1Trace2";
import Game1Trace3Map from "../Traces/Game1Trace3";
import Game1Trace4Map from "../Traces/Game1Trace4";
import Game1Trace5Map from "../Traces/Game1Trace5";
import Game1Trace6Map from "../Traces/Game1Trace6";
import Game1Trace7Map from "../Traces/Game1Trace7";
import Game1Trace8Map from "../Traces/Game1Trace8";
import Game1Trace9Map from "../Traces/Game1Trace9";
import Game1Trace10Map from "../Traces/Game1Trace10";
import Game1Trace11Map from "../Traces/Game1Trace11";
import WellDoneMap from "../WellDone/WellDoneAssetMap";

const get_ani_map = (val) => {
  switch (val) {
    case "Game1Trace1Map":
      return Game1Trace1Map;
      break;
    case "Game1Trace2Map":
      return Game1Trace2Map;
      break;
    case "Game1Trace3Map":
      return Game1Trace3Map;
      break;
    case "Game1Trace4Map":
      return Game1Trace4Map;
      break;
    case "Game1Trace5Map":
      return Game1Trace5Map;
    case "Game1Trace6Map":
      return Game1Trace6Map;
    case "Game1Trace7Map":
      return Game1Trace7Map;
    case "Game1Trace8Map":
      return Game1Trace8Map;
    case "Game1Trace9Map":
      return Game1Trace9Map;
    case "Game1Trace10Map":
      return Game1Trace10Map;
    case "Game1Trace11Map":
      return Game1Trace11Map;
    case "WellDoneMap":
      return WellDoneMap;

    default:
      break;
  }
};

export default function Game1({ preLoad, scenename, assetID, soundID }) {
  const { Bg, setBg } = useContext(BGContext);
  const Next = useLoadAsset(preLoad);

  const stop_all_sounds = () => {
    Assets?.Game1Trace1?.sounds?.map((v) => v?.stop());
  };

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;

  const [fadeR, setFadeR] = useState(0);
  const [fadeW, setFadeW] = useState(0);
  const [playing, setplaying] = useState(false);
  const [number, setNumber] = useState(null);
  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    const element = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setNumber(element);
  }, []);

  useEffect(() => {
    setBg(Assets?.Scene3screen1?.Bg);
    if (Assets?.Game1Trace1) {
      Assets?.Game1Trace1?.sounds[soundID]?.play();
      Assets?.Game1Trace1?.sounds[soundID]?.on("end", () => {});
    }
  }, []);

  const playCorrectSound = () => {
    if (Assets?.Game1Trace1) {
      setplaying(true);
      Assets?.Game1Trace1?.sounds[11]?.play();
      Assets?.Game1Trace1?.sounds[11]?.on("end", () => {
        // setSceneId("/Game1_Helper");
        setplaying(false);
      });
    }
  };

  const playWrongSound = () => {
    if (Assets?.Game1Trace1) {
      setplaying(true);
      Assets?.Game1Trace1?.sounds[12]?.play();
      Assets?.Game1Trace1?.sounds[12]?.on("end", () => {
        setplaying(false);
      });
    }
  };

  const option1 = () => {
    if (playing === false) {
      stop_all_sounds();
      playCorrectSound();
      setFadeR(1);
      setClicked(1);
      const timeout = setTimeout(() => {
        setSceneId("/" + scenename);
      }, 1500);
    }
  };

  const option2 = () => {
    if (playing === false) {
      Assets?.Game1Trace1?.sounds[soundID]?.stop();
      setFadeW(1);
      playWrongSound();
    }
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setFadeW(0);
    }, 1500);
  }, [fadeW]);

  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    if (clicked === 1) {
      Assets?.Game1Trace1?.sounds[soundID]?.stop();
    }

    if (seconds > 15) {
      setSeconds(0);
      Assets?.Game1Trace1?.sounds[soundID]?.play();
    }
  });
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
  }, []);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          {/* <div className="mouse-move" onMouseMove={handleMouseMove}></div> */}
          <Image
            src={Assets?.Game1Trace1?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="ClassroomText"
          />

          <div
            className="option1_div"
            onClick={option1}
            style={{
              left: number === 1 ? "7.5%" : "53.5%",
              cursor: playing === false ? "pointer" : "",
            }}
          ></div>

          <Image
            src={Assets?.[assetID]?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Option1"
            // onClick={option1}
            style={{
              left: number === 1 ? "5.6%" : "51.5%",
            }}
          />
          <div
            className="option2_div"
            onClick={option2}
            style={{
              left: number === 1 ? "53.5%" : "7.5%",
              cursor: playing === false ? "pointer" : "",
            }}
          >
            {" "}
          </div>
          <Image
            src={Assets?.[assetID]?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Option2"
            // onClick={option2}
            style={{
              left: number === 1 ? "51.5%" : "5.6%",
            }}
          />

          <Image
            src={Assets?.Game1Trace1?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="RightHighlight"
            style={{
              display: fadeR === 1 ? "block" : "none",
              left: number === 1 ? "5.8%" : "51.7%",
            }}
          />
          <Image
            src={Assets?.Game1Trace1?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="WrongHighlight"
            style={{
              display: fadeW === 1 ? "block" : "none",
              left: number === 1 ? "51.7%" : "5.8%",
            }}
          />
        </>
      }
    />
  );
}
