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
import Star from "../progress_bar/progress_bar";
import { counter } from "../progress_bar/progress_bar_map";

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

export default function Game1({
  preLoad,
  scenename,
  assetID,
  soundID,
  loadtest,
  setCount,
  count,
}) {
  const { Bg, setBg } = useContext(BGContext);
  const Next = useLoadAsset(preLoad);
  const stop_all_sounds = () => {
    Assets?.[assetID]?.sounds?.map((v) => v?.stop());
  };

  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;
  const [isLoading, setisLoading] = useState(true);

  const [fadeR, setFadeR] = useState(0);
  const [fadeW, setFadeW] = useState(0);
  const [playing, setplaying] = useState(false);
  const [number, setNumber] = useState(null);
  const [clicked, setClicked] = useState(0);

  useEffect(() => {
    const element = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setNumber(element);
    console.log(preLoad, assetID);
  }, []);

  useEffect(() => {
    setBg(Assets?.Scene3screen1?.Bg);
    if (isLoading === false) {
      if (Assets?.[assetID]) {
        Assets?.[assetID]?.sounds[0]?.play();
        Assets?.[assetID]?.sounds[0]?.on("end", () => {});
      }
    }
  }, [isLoading]);

  const playCorrectSound = () => {
    counter(count, setCount);
    if (Assets?.intro) {
      setplaying(true);
      Assets?.intro?.sounds[0]?.play();
      Assets?.intro?.sounds[0]?.on("end", () => {
        // setSceneId("/Game1_Helper");
        setplaying(false);
      });
    }
  };

  const playWrongSound = () => {
    if (Assets?.intro) {
      setplaying(true);
      Assets?.intro?.sounds[1]?.play();
      Assets?.intro?.sounds[1]?.on("end", () => {
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
      // Assets?.[assetID]?.sounds[0]?.stop();
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
      Assets?.[assetID]?.sounds[0]?.stop();
    }

    if (seconds > 15) {
      setSeconds(0);
      Assets?.[assetID]?.sounds[0]?.play();
    }
  });
  useEffect(() => {
    if (isLoading === false) {
      const interval = setInterval(() => {
        setSeconds((seconds) => seconds + 1);
      }, 1000);
    }
  }, [isLoading]);

  const transRef = useRef(null);

  useEffect(() => {
    console.log(Assets?.intro?.lottie[1]);
    if (Assets && transRef.current) {
      lottie.loadAnimation({
        name: "boy",
        container: transRef.current,
        renderer: "svg",
        autoplay: true,
        loop: true,
        animationData: Assets?.intro?.lottie[1],
        speed: 1,
      });
    }
    setTimeout(() => {
      setisLoading(false);
    }, 1500);
  }, [isLoading]);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <div
            className="transition_bg"
            style={{ display: isLoading ? "block" : "none" }}
          >
            <div
              className="transition"
              style={{ display: isLoading ? "block" : "none" }}
              ref={transRef}
            ></div>
          </div>

          <Image
            src={Assets?.intro?.sprites[7]}
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
            src={Assets?.intro?.sprites[8]}
            alt="txt"
            id="fadeup"
            className="RightHighlight"
            style={{
              display: fadeR === 1 ? "block" : "none",
              left: number === 1 ? "5.8%" : "51.7%",
            }}
          />
          <Image
            src={Assets?.intro?.sprites[9]}
            alt="txt"
            id="fadeup"
            className="WrongHighlight"
            style={{
              display: fadeW === 1 ? "block" : "none",
              left: number === 1 ? "51.7%" : "5.8%",
            }}
          />
          <Star num={count} />
        </>
      }
    />
  );
}
