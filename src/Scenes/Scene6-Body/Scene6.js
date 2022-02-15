import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene6AssetMap";
import lottie from "lottie-web";
import "../../styles/Scene4.css";
import Image from "../../utils/elements/Image";

export default function Scene6() {
  const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      Assets?.Scene2?.sounds[0]?.play();
    }
  }, [Assets, Loading, isLoading]);

  const replayBtn = () => {};

  const RetryGame = () => {
    if (Assets?.Scene2 && !Loading) {
      Assets?.Scene2?.sounds[1].play();
      Assets?.Scene2?.sounds[1].on("end", () => {
        setSceneId("/");
      });
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
        />
      }
    />
  );
}
