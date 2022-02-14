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
  const [option1Verify, setoption1Verify] = useState(0);
  const [option2Wrng, setoption2Wrng] = useState(0);

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
    const G2A1 = G2Ans;
    const G2W1 = G2Wrng;
    const G2Q1 = flowCount;
    setG2QiD(G2Q1);
    setAnswer(G2A1);
    setWrong(G2W1);
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
    if (answer < 29) {
      if (playing === false) {
        console.log("Corrrect");
        playCorrectSound();
        const item = IntroMap.sprites[answer + 1].split("_");
        const item1 = item[2].replace(".svg", "");
        // console.log(item1);
        if (playing === false) {
          playCorrectSound();

          setoption1Verify(1);

          const timeout = setTimeout(() => {
            setSceneId("/" + item1 + "_Game2");
          }, 1000);

          setG2Ans(answer + 1);
          setG2Wrng(wrong + 1);
        }
      }
    } else {
      setSceneId("/Scene6");
    }
  };

  const Option2 = () => {
    if (playing === false) {
      console.log("Wrong");
      playWrongSound();
      setoption2Wrng(1);
    }
  };

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      setplaying(true);

      Assets?.Scene2?.sounds[flowCount + 1]?.play();
      Assets?.Scene2?.sounds[flowCount + 1].on("end", () => {
        setplaying(false);
      });
    }
  }, [Assets, Loading, isLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setoption2Wrng(0);
    }, 1000);
  }, [option2Wrng]);

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
              borderColor: option1Verify === 1 ? "Green" : "#25256d",
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
              borderColor: option2Wrng === 1 ? "Red" : "#25256d",
            }}
          />
        </>
      }
    />
  );
}
