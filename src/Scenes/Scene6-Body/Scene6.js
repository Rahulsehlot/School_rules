import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene6AssetMap";
import lottie from "lottie-web";
import "../../styles/Scene4.css";
import Image from "../../utils/elements/Image";

export default function Scene6({ setCounter, setG2Ans, setNext, setG2Wrng }) {
  const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const [playing, setplaying] = useState(false);

  const { intro } = Assets;

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      Assets?.Scene2?.sounds[0]?.play();
      setplaying(true);
      Assets?.Scene2?.sounds[0].on("end", () => {
        Assets?.Scene2?.sounds[2]?.play();
        Assets?.Scene2?.sounds[2].on("end", () => {
          setplaying(false);
        });
      });
    }
  }, [Assets, Loading, isLoading]);

  const RetryGame = () => {
    if (playing === false) {
      if (Assets?.Scene2 && !Loading) {
        Assets?.Scene2?.sounds[1].play();
        Assets?.Scene2?.sounds[1].on("end", () => {
          setSceneId("/");
          setCounter(6);
          setG2Ans(5);
          setNext(0);
          setG2Wrng(31);
        });
      }
    }
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <Image
          src={Assets?.Scene2?.sprites[0]}
          alt="txt"
          id="fadeup"
          className="audio_replay_icon_scene6"
          onClick={RetryGame}
          style={{ cursor: "pointer" }}
        />
      }
    />
  );
}
