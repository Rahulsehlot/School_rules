import { useContext, useRef, useEffect, useState } from "react";
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
import Scene3AssetMapScreen1 from "../Traces/Scene2Trace1";

export default function Scene4({ scenename }) {
  const Next = useLoadAsset(Scene3AssetMapScreen1);
  const { Bg, setBg } = useContext(BGContext);

  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);
  const [isLoading, setisLoading] = useState(true);

  const stop_all_sounds = () => {
    Assets?.Scene4?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setBg(Assets?.Scene4?.Bg);
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: false,
          animationData: Assets?.intro?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (isLoading === false) {
      if (Assets?.Scene4) {
        Assets?.Scene4?.sounds[0]?.play();
        lottie.play("placeholder");
        Assets?.Scene4?.sounds[0].on("end", () => {
          setSceneId("/Scene3_1");
        });
      }
    }
  }, [isLoading]);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/Scene3_1");
  };

  const transRef = useRef(null);

  useEffect(() => {
    if (Assets && transRef.current) {
      lottie.loadAnimation({
        name: "boy",
        container: transRef.current,
        renderer: "svg",
        autoplay: true,
        loop: true,
        animationData: Assets?.intro?.lottie[1],
        speed: 0.7,
      });
    }
    setTimeout(() => {
      setisLoading(false);
    }, 1000);
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

          <div ref={Ref} className="intro_Boy_container"></div>
          <Image
            src={Assets?.Scene4?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Scene4_txt_img"
          />

          <Image
            src={Assets?.intro?.sprites[8]}
            alt="txt"
            id="fadeup"
            className="next"
            onClick={forward}
            style={{ cursor: "pointer" }}
          />
          <Image
            src={Assets?.Scene4?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="shadow"
          />
        </>
      }
    />
  );
}
