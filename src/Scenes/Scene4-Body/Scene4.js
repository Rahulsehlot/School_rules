import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene4Map";
import lottie from "lottie-web";
import "../../styles/Scene4.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene4Map from "./Scene4Map";
import Game1Trace1Map from "../Traces/Game1Trace1";

export default function Scene4({ scenename }) {
  const Next = useLoadAsset(Game1Trace1Map);
  const { Bg, setBg } = useContext(BGContext);

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets?.Scene4?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    if (Assets?.Scene4) {
      Assets?.Scene4?.sounds[0]?.play();
      Assets?.Scene4?.sounds[0].on("end", () => {
        setSceneId("/Game1Screen1");
      });
    }
  }, []);

  useEffect(() => {
    setBg(Assets?.Scene4?.Bg);
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.intro?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/Game1Screen1");
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          <div ref={Ref} className="intro_Boy_container"></div>
          <Image
            src={Assets?.Scene4?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Scene4_txt_img"
          />

          <Image
            src={Assets?.Scene2?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="next"
            onClick={forward}
            style={{ cursor: "pointer" }}
          />
        </>
      }
    />
  );
}
