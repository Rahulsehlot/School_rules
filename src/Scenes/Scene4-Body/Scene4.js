import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene4Map";
import lottie from "lottie-web";
import "../../styles/Scene4.css";
import Image from "../../utils/elements/Image";

export default function Scene4() {
  const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      Assets?.Scene2?.sounds[0]?.play();
      Assets?.Scene2?.sounds[0].on("end", () => {
        setSceneId("/Game1");
      });
    }
  }, [Assets, Loading, isLoading]);

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

  const btn_style = {
    width: "20%",
    position: "fixed",
    bottom: "10%",
  };

  const txt_style = {
    width: "20%",
    position: "fixed",
    bottom: "45%",
    fontSize: "4vmin",
    fontWeight: "700",
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <Image
            src={Assets?.Scene2?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="senses_smell_btn"
            style={{
              ...btn_style,
            }}
          />
          <div
            id="fadeup"
            className="senses_smell_txt"
            style={{
              ...txt_style,
            }}
          >
            Nose
          </div>

          <Image
            src={Assets?.Scene2?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="senses_taste_btn"
            style={{
              ...btn_style,
            }}
          />
          <div
            id="fadeup"
            className="senses_taste_txt"
            style={{
              ...txt_style,
            }}
          >
            Tongue
          </div>

          <Image
            src={Assets?.Scene2?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_btn"
            style={{
              ...btn_style,
            }}
          />
          <div
            id="fadeup"
            className="senses_hearing_txt"
            style={{
              ...txt_style,
            }}
          >
            Ears
          </div>

          <Image
            src={Assets?.Scene2?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="senses_touch_btn"
            style={{
              ...btn_style,
            }}
          />
          <div
            id="fadeup"
            className="senses_touch_txt"
            style={{
              ...txt_style,
            }}
          >
            Skin
          </div>

          <Image
            src={Assets?.Scene2?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="senses_vision_btn"
            style={{
              ...btn_style,
            }}
          />
          <div
            id="fadeup"
            className="senses_vision_txt"
            style={{
              ...txt_style,
            }}
          >
            Eyes
          </div>

          <div ref={Ref} className="Scene4_lottie_container"></div>
        </>
      }
    />
  );
}
