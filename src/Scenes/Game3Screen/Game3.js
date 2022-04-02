import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import "../../styles/Game1.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Game2Trace1Map from "../Traces/Game2Trace1";
import Game2Trace4Map from "../Traces/Game2Trace4";
import Game2Trace3Map from "../Traces/Game2Trace3";
import Game2Trace2Map from "../Traces/Game2Trace2";

const get_ani_map = (val) => {
  switch (val) {
    case "Game1Trace1Map":
      return Game2Trace1Map;
      break;
    case "Game1Trace2Map":
      return Game2Trace2Map;
      break;
    case "Game1Trace3Map":
      return Game2Trace3Map;
      break;
    case "Game1Trace4Map":
      return Game2Trace4Map;
      break;
  }
};

export default function Game3({ preLoad, scenename, assetID, soundID }) {
  const { Bg, setBg } = useContext(BGContext);
  const Next = useLoadAsset(preLoad);

  const stop_all_sounds = () => {
    Assets?.Game2Trace1?.sounds?.map((v) => v?.stop());
  };

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;

  const [fadeR, setFadeR] = useState(0);
  const [fadeW, setFadeW] = useState(0);
  const [playing, setplaying] = useState(false);
  const [clicked, setClicked] = useState(0);

  const [number, setNumber] = useState(null);

  useEffect(() => {
    const element = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setNumber(element);
  }, []);

  useEffect(() => {
    setBg(Assets?.Scene9screen1?.Bg);
    if (Assets?.Game2Trace1) {
      Assets?.[assetID]?.sounds[0]?.play();
      Assets?.[assetID]?.sounds[0]?.on("end", () => {});
    }
  }, []);

  const playCorrectSound = () => {
    if (Assets?.Game1Trace1) {
      setplaying(true);

      Assets?.[assetID]?.sounds[0]?.stop();
      Assets?.Game1Trace1?.sounds[11]?.play();
      Assets?.Game1Trace1?.sounds[11]?.on("end", () => {
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
      Assets?.[assetID]?.sounds[0]?.stop();
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
            src={Assets?.Game3Trace1?.sprites[2]}
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
          ></div>
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
