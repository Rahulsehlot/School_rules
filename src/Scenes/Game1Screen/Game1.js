import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Game1Map";
import lottie from "lottie-web";
import "../../styles/Game1.css";
import Image from "../../utils/elements/Image";

export default function Game1({ counter, setCounter }) {
  const { Bg, Loading } = useLoadAsset(IntroMap);

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const [G1ImgID, setG1ImgID] = useState();
  const [G1SoundId, setG1SoundId] = useState(0);
  const [s1, setS1] = useState(0);
  const [helper, setHelper] = useState(0);
  const [playing, setplaying] = useState(false);

  useEffect(() => {
    const G1 = counter;
    setHelper(G1);
    setCounter(G1 + 1);

    if (G1 > 5 && G1 <= 20) {
      setG1ImgID(counter);
      setG1SoundId(counter - 5);
    } else {
      setSceneId("/Scene5");
    }
  }, []);

  console.log(helper);

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      setplaying(true);

      Assets?.Scene2?.sounds[G1SoundId].play();
      Assets?.Scene2?.sounds[G1SoundId].on("end", () => {
        setplaying(false);
      });
    }
  }, [Assets, Loading, isLoading]);

  const playCorrectSound = () => {
    if (Assets?.Scene2 && !Loading) {
      setplaying(true);
      Assets?.Scene2?.sounds[16].play();
      Assets?.Scene2?.sounds[16].on("end", () => {
        setSceneId("/Game1_Helper");

        setplaying(false);
      });
    }
  };

  const playWrongSound = () => {
    if (Assets?.Scene2 && !Loading) {
      setplaying(true);
      Assets?.Scene2?.sounds[17].play();
      Assets?.Scene2?.sounds[17].on("end", () => {
        setplaying(false);
      });
    }
  };

  const replayBtn = () => {
    if (playing === false) {
      if (Assets?.Scene2 && !Loading) {
        setplaying(true);
        Assets?.Scene2?.sounds[G1SoundId].play();
        Assets?.Scene2?.sounds[G1SoundId].on("end", () => {
          setplaying(false);
        });
      }
    }
  };

  const Nose = () => {
    if (playing === false) {
      const ans = IntroMap.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/Organs_images/", "")
        .replace("_Nose.svg", "");
      const verify = ans
        .replace("internal/images/Organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      console.log(verify);
      if (verify === "Nose") {
        console.log("Right");
        setS1(counter + 1);
        playCorrectSound();
      } else {
        console.log("Wrong");
        playWrongSound();
      }
    }
  };

  const Tongue = () => {
    if (playing === false) {
      const ans = IntroMap.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/Organs_images/", "")
        .replace("_Tongue.svg", "");
      const verify = ans
        .replace("internal/images/Organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      console.log(verify);
      if (verify === "Tongue") {
        console.log("Right");
        setS1(counter + 1);
        playCorrectSound();
      } else {
        console.log("Wrong");
        playWrongSound();
      }
    }
  };

  const Ear = () => {
    if (playing === false) {
      const ans = IntroMap.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/Organs_images/", "")
        .replace("_Ear.svg", "");
      const verify = ans
        .replace("internal/images/Organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      console.log(verify);
      if (verify === "Ear") {
        console.log("Right");
        setS1(counter + 1);
        playCorrectSound();
      } else {
        console.log("Wrong");
        playWrongSound();
      }
    }
  };

  const Skin = () => {
    if (playing === false) {
      const ans = IntroMap.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/Organs_images/", "")
        .replace("_Skin.svg", "");
      const verify = ans
        .replace("internal/images/Organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      console.log(verify);
      if (verify === "Skin") {
        console.log("Right");
        setS1(counter + 1);
        playCorrectSound();
      } else {
        console.log("Wrong");
        playWrongSound();
      }
    }
  };

  const Eye = () => {
    if (playing === false) {
      const ans = IntroMap.sprites[G1ImgID];
      const slice = ans
        .replace("internal/images/Organs_images/", "")
        .replace("_Eye.svg", "");
      const verify = ans
        .replace("internal/images/Organs_images/", "")
        .replace(slice + "_", "")
        .replace(".svg", "");
      console.log(verify);
      if (verify === "Eye") {
        console.log("Right");
        setS1(counter + 1);
        playCorrectSound();
      } else {
        console.log("Wrong");
        playWrongSound();
      }
    }
  };

  const [moved, setMoved] = useState(1);
  console.log(moved);
  function handleMouseMove() {
    setMoved(1);
    console.log(moved);
  }

  useEffect(() => {
    if (playing === false) {
      const timeout = setTimeout(() => {
        setMoved(0);
      }, 12000);
      if (moved === 0) {
        playTimer();
      }
    }
  }, [moved]);

  const playTimer = () => {
    if (Assets?.Scene2 && !Loading) {
      setplaying(true);
      Assets?.Scene2?.sounds[18]?.play();

      // Sound.play();

      Assets?.Scene2?.sounds[18].on("end", () => {
        setplaying(false);
      });
    }
  };
  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <div className="mouse-move" onMouseMove={handleMouseMove}></div>

          <Image
            src={Assets?.Scene2?.sprites[G1ImgID]}
            alt="txt"
            id="fadeup"
            className="Game_question"
          />

          <Image
            src={Assets?.Scene2?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="senses_smell_img_game1"
            onClick={Nose}
          />

          <Image
            src={Assets?.Scene2?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="senses_taste_img_game1"
            onClick={Tongue}
          />
          <Image
            src={Assets?.Scene2?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_img_game1"
            onClick={Ear}
          />
          <Image
            src={Assets?.Scene2?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="senses_touch_img_game1"
            onClick={Skin}
          />

          <Image
            src={Assets?.Scene2?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="senses_vision_img_game1"
            onClick={Eye}
          />

          <Image
            src={Assets?.Scene2?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="dotted_Line"
          />
          <Image
            src={Assets?.Scene2?.sprites[21]}
            alt="txt"
            id="fadeup"
            className="audio_replay_icon"
            onClick={replayBtn}
          />
        </>
      }
    />
  );
}
