import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Game2AssetMap";
import lottie from "lottie-web";
import "../../styles/Game2.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";

export default function Game2({
  flowCount,
  G2Ans,
  setG2Ans,
  G2Wrng,
  setG2Wrng,
  G2answer,
}) {
  // const { Bg, Loading } = useLoadAsset(IntroMap);
  const { Bg } = useContext(BGContext);
  const [Loading, setLoading] = useState(true);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const [G2QiD, setG2QiD] = useState();
  const [answer, setAnswer] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [number, setNumber] = useState(null);
  const [playing, setplaying] = useState(false);
  const [option1Verify, setoption1Verify] = useState(0);
  const [option2Wrng, setoption2Wrng] = useState(0);
  const [grey, setGrey] = useState(false);
  const { intro } = Assets;

  const Ref = useRef(null);

  useEffect(() => {}, []);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  //Placing on either screens
  useEffect(() => {
    const element = Math.floor(Math.random() * (2 - 1 + 1)) + 1;
    setNumber(element);
  }, []);

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
    if (Assets?.Scene22 && !Loading) {
      setplaying(true);
      Assets?.Scene22?.sounds[5]?.play();
      Assets?.Scene22?.sounds[5]?.on("end", () => {
        setplaying(false);
      });
    }
  };

  const playWrongSound = () => {
    if (Assets?.Scene22 && !Loading) {
      setplaying(true);
      Assets?.Scene22?.sounds[6]?.play();
      Assets?.Scene22?.sounds[6]?.on("end", () => {
        setplaying(false);
      });
    }
  };

  console.log(flowCount);
  const Option1 = () => {
    if (answer < 29) {
      if (playing === false) {
        playCorrectSound();
        if (playing === false) {
          setoption1Verify(1);
          // const soundEnd = () => {
          const item = IntroMap.sprites[answer + 1].split("_");
          const item1 = item[2].replace(".svg", "");
          const timeout = setTimeout(() => {
            setSceneId("/" + item1 + "_Game2");
          }, 1000);

          // };
          playCorrectSound();

          setG2Ans(answer + 1);
          setG2Wrng(wrong + 1);
        }
      }
    } else {
      playCorrectSound();
      setoption1Verify(1);

      const timeout = setTimeout(() => {
        setSceneId("/Scene6");
      }, 1000);
    }
  };

  const Option2 = () => {
    if (playing === false) {
      playWrongSound();
      setoption2Wrng(1);
    }
  };

  useEffect(() => {
    console.log(Loading);
    if (Assets?.Scene22 && !Loading) {
      setplaying(true);
      setGrey(true);

      Assets?.Scene22?.sounds[flowCount]?.play();
      Assets?.Scene22?.sounds[flowCount]?.on("end", () => {
        setplaying(false);
        setGrey(false);
      });
    }
  }, [Assets, Loading, isLoading]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setoption2Wrng(0);
    }, 1000);
  }, [option2Wrng]);

  const replayBtn = () => {
    if (playing === false) {
      if (Assets?.Scene22 && !Loading) {
        setplaying(true);
        setGrey(true);

        Assets?.Scene22?.sounds[7]?.play();
        Assets?.Scene22?.sounds[7]?.on("end", () => {
          if (playing === false) {
            if (Assets?.Scene22 && !Loading) {
              Assets?.Scene22?.sounds[flowCount]?.play();
              Assets?.Scene22?.sounds[flowCount]?.on("end", () => {
                setplaying(false);
                setGrey(false);
              });
            }
          }
        });
      }
    }
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          <Image
            src={Assets?.Scene22?.sprites[G2QiD]}
            alt="txt"
            id="fadeup"
            className="Game2_question_img"
          />

          <Image
            src={Assets?.Scene22?.sprites[56]}
            alt="txt"
            id="fadeup"
            className="Option1BG"
            style={{
              cursor: playing === false ? "pointer" : "",
            }}
          />

          <Image
            src={Assets?.Scene22?.sprites[56]}
            alt="txt"
            id="fadeup"
            className="Option2BG"
            style={{
              borderColor: option1Verify === 1 ? "Green" : "#25256d",
              cursor: playing === false ? "pointer" : "",
            }}
          />

          <div
            alt="txt"
            id="fadeup"
            onClick={Option1}
            className="Option1"
            style={{
              left: number === 1 ? "8.5%" : "51.5%",
              cursor: playing === false ? "pointer" : "",
            }}
          >
            <Image
              src={Assets?.Scene22?.sprites[answer]}
              alt="txt"
              id="fadeup"
              className="Option1_Img"
            />
          </div>

          <Image
            src={Assets?.Scene22?.sprites[57]}
            alt="txt"
            id="fadeup"
            className="Option1_Button"
            style={{
              display: option1Verify === 1 ? "block" : "none",
              left: number === 1 ? "7.4%" : "50.3%",
            }}
          />

          <div
            id="fadeup"
            onClick={Option2}
            className="Option2"
            style={{
              left: number === 1 ? "51.5%" : "8.5%",
              cursor: playing === false ? "pointer" : "",
            }}
          >
            <Image
              src={Assets?.Scene22?.sprites[wrong]}
              alt="txt"
              id="fadeup"
              onClick={Option2}
              className="Option2_Img"
            />
          </div>
          <Image
            src={Assets?.Scene22?.sprites[58]}
            alt="txt"
            id="fadeup"
            className="Option2_Button"
            style={{
              display: option2Wrng === 1 ? "block" : "none",
              left: number === 1 ? "50.5%" : "7.4%",
            }}
          />

          <div
            className={
              playing === true
                ? "audio_replay_iconDisabled"
                : "audio_replay_icon"
            }
            style={{
              opacity: grey === false ? "1" : "0.65",
            }}
          >
            <Image
              src={Assets?.Scene22?.sprites[55]}
              alt="txt"
              id="fadeup"
              onClick={replayBtn}
              style={{
                cursor: grey === false ? "pointer" : "",
              }}
            />
          </div>
        </>
      }
    />
  );
}
