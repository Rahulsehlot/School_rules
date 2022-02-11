import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene2Map";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";

export default function Scene2() {
  const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      Assets?.Scene2?.sounds[0]?.play();
      Assets?.Scene2?.sounds[0].on("end", () => {
        setSceneId("/Eyes_Scene3");
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

  console.log(Assets?.Scene2?.lottie);
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
            className="senses_smell_img"
          />
          <div id="fadeup" className="senses_smell">
            Smell
          </div>
          <Image
            src={Assets?.Scene2?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="senses_taste_img"
          />
          <div id="fadeup" className="senses_taste">
            Taste
          </div>

          <Image
            src={Assets?.Scene2?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_img"
          />
          <div id="fadeup" className="senses_hearing">
            Hear
          </div>

          <Image
            src={Assets?.Scene2?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="senses_touch_img"
          />
          <div id="fadeup" className="senses_touch">
            Touch
          </div>

          <Image
            src={Assets?.Scene2?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="senses_vision_img"
            style={{
              top: "3%",
            }}
          />
          <div id="fadeup" className="senses_vision" style={{ top: "40.5%" }}>
            Vision
          </div>

          <div ref={Ref} className="intro_lottie_container"></div>
        </>
      }
    />
  );
}
