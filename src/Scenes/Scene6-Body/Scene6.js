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
      setplaying(true);
      Assets?.Scene2?.sounds[0]?.play();
      Assets?.Scene2?.sounds[0].on("end", () => {
        Assets?.Scene2?.sounds[3]?.play();
        Assets?.Scene2?.sounds[3]?.volume(0.1);
        Assets?.Scene2?.sounds[3].on("end", () => {
          Assets?.Scene2?.sounds[2]?.play();
          Assets?.Scene2?.sounds[2].on("end", () => {
            setplaying(false);
          });
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

  useEffect(() => {
    if (Assets && Ref.current && !Loading) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.Scene2?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, [Assets, Loading]);

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          <Image
            src={Assets?.Scene2?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="audio_replay_icon_scene6"
            onClick={RetryGame}
            style={{ cursor: playing === false ? "pointer" : "" }}
          />

          <div ref={Ref} className="Scene6_lottie_container"></div>
        </>
      }
    />
  );
}
