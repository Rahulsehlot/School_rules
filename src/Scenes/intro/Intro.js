import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import lottie from "lottie-web";
import "../../styles/intro.css";
import Image from "../../utils/elements/Image";
// import IntroMap from "../Scene2-Body/Scene2Map";
import { BGContext } from "../../contexts/Background";
import Scene4Map from "../Scene4-Body/Scene4Map";

export default function Intro({ s1, setS1, setaId, aId }) {
  const Next = useLoadAsset(Scene4Map);
  const { Bg, setBg } = useContext(BGContext);

  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);
  const [autoPLayState, setautoPLayState] = useState(false);
  const [playBtnHide, SetplayBtnHide] = useState(0);
  const [isLoading, setisLoading] = useState(true);

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets && Ref.current) {
      setBg(Assets?.intro?.Bg);
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: false,
          autoplay: false,
          progress: true,
          animationData: Assets?.intro?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

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
        speed: 1,
      });
    }
    setTimeout(() => {
      setisLoading(false);
    }, 500);
  }, []);

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

          <Image
            src={intro?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="senses_txt_img"
          />
          <Image
            src={intro?.sprites[9]}
            alt="txt"
            id="fadeup"
            className="senses_foreground"
          />

          <Image
            src={intro?.sprites[10]}
            alt="txt"
            id="fadeup"
            className="school"
          />

          <Image
            className="play_btn"
            src={intro?.sprites[1]}
            alt="txt"
            id="fadeup"
            onClick={() => {
              lottie.play("placeholder");
              if (playing === false) {
                if (Assets?.intro) {
                  Assets?.intro?.sounds[2]?.play();
                  Assets?.intro?.sounds[2]?.on("end", () => {
                    setSceneId("/Scene4");
                  });
                }
                SetplayBtnHide(1);
                setautoPLayState(true);
                setplaying(true);
                setplaying(false);
              }
            }}
            style={{
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              cursor: playing === false ? "pointer" : "",
              display: playBtnHide === 0 ? "block" : "none",
            }}
          />
          <div ref={Ref} className="intro_Boy_container"></div>
        </>
      }
    />
  );
}
