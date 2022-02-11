import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Game2AssetMap";
import lottie from "lottie-web";
import "../../styles/Game2.css";
import Image from "../../utils/elements/Image";

export default function Game2({
  flowCount,
  G2Ans,
  setG2Ans,
  G2Wrng,
  setG2Wrng,
  G2answer,
}) {
  const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const [G2QiD, setG2QiD] = useState();
  const [answer, setAnswer] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [number, setNumber] = useState(null);
  const [playing, setplaying] = useState(false);

  const { intro } = Assets;

  const Ref = useRef(null);

  //Placing on either screens
  useEffect(() => {
    const element = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setNumber(element);
  }, []);
  console.log(number);

  //Setting Answer and random wrong answer
  useEffect(() => {
    const min = 5;
    const max = 29;
    const rand = min + Math.ceil(Math.random() * (max - min));
    const slice = G2answer;
    const G2S1 = flowCount;
    const G2A1 = G2Ans;
    const G2Q1 = rand;
    const array = IntroMap.sprites[rand].split("_");
    const G2verify = array[2].replace(".svg", "");
    setAnswer(G2A1);
    if (G2verify === slice) {
      console.log("please");
      if (G2Q1 < 29) {
        setWrong(G2Q1 + 1);
      } else {
        setWrong(G2Q1 - 7);
      }
    } else {
      setWrong(G2Q1);
    }
    if (G2S1 <= 5) {
      setG2QiD(flowCount);
    }
    console.log(G2Q1);
  }, []);

  const playCorrectSound = () => {
    if (Assets?.Scene2 && !Loading) {
      setplaying(true);

      Assets?.Scene2?.sounds[6]?.play();
      Assets?.Scene2?.sounds[6].on("end", () => {
        setplaying(false);
      });
    }
  };

  const playWrongSound = () => {
    if (Assets?.Scene2 && !Loading) {
      setplaying(true);

      Assets?.Scene2?.sounds[7]?.play();
      Assets?.Scene2?.sounds[7].on("end", () => {
        setplaying(false);
      });
    }
  };

  const Option1 = () => {
    const slice = G2answer;
    // console.log(IntroMap.sprites[wrong]);
    const array = IntroMap.sprites[answer].split("_");
    // console.log(array);
    const G2verify = array[2].replace(".svg", "");
    // console.log(G2verify);
    if (answer < 29) {
      if (slice === G2verify) {
        // console.log("Right");
        const item = IntroMap.sprites[answer + 1]?.split("_");
        const item1 = item[2].replace(".svg", "");
        // console.log(item1);
        if (playing === false) {
          playCorrectSound();
          setSceneId("/" + item1 + "_Game2");
          setG2Ans(answer + 1);
        }
      } else {
        if (playing === false) {
          console.log("Wrong");
          playWrongSound();
        }
      }
    } else {
      setSceneId("/Scene6");
    }
  };

  const Option2 = () => {
    const slice = G2answer;
    // console.log(IntroMap.sprites[wrong]);
    const array = IntroMap.sprites[wrong].split("_");
    const G2verify = array[2].replace(".svg", "");
    // console.log(G2verify);
    // console.log(slice);
    if (answer < 29) {
      if (slice === G2verify) {
        // console.log("right");
        const item = IntroMap.sprites[answer + 1].split("_");
        const item1 = item[2].replace(".svg", "");
        // console.log(item1);
        if (playing === false) {
          playCorrectSound();

          setSceneId("/" + item1 + "_Game2");
          setG2Ans(answer + 1);
        }
      } else {
        if (playing === false) {
          playWrongSound();
          console.log("Wrong");
        }
      }
    } else {
      console.log("HiHIHIHI");
    }
  };

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      setplaying(true);

      PlayAudio(Assets?.Scene2?.sounds[flowCount + 1], () => {
        setplaying(false);
      });
    }
  }, [Assets, Loading, isLoading]);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          <Image
            src={Assets?.Scene2?.sprites[G2QiD]}
            alt="txt"
            id="fadeup"
            className="Game2_question_img"
          />

          <Image
            src={Assets?.Scene2?.sprites[answer]}
            alt="txt"
            id="fadeup"
            onClick={Option1}
            className="Option1"
            style={{
              left: number === 1 ? "5%" : "54%",
            }}
          />
          <Image
            src={Assets?.Scene2?.sprites[wrong]}
            alt="txt"
            id="fadeup"
            onClick={Option2}
            className="Option2"
            style={{
              left: number === 1 ? "54%" : "5%",
            }}
          />
        </>
      }
    />
  );
}
