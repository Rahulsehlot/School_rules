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

  const { SceneId, setHideAllButtons, setSceneId, Assets, setAssets, playBGSound, setPlayBGSound, BG_sound } = useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);
  const [autoPLayState, setautoPLayState] = useState(false);
  const [playBtnHide, SetplayBtnHide] = useState(false);
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
    setHideAllButtons(isLoading)
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
            className={`play_btn  ${playBtnHide ? "play_btnAnim" : ""}`}
            src={intro?.sprites[1]}
            alt="txt"
            // id="fadeup"
            onClick={() => {
              SetplayBtnHide(true);
              setautoPLayState(true);
              BG_sound?.play()
              setPlayBGSound(true)
              // setplaying(true);
              // setplaying(false);
              setTimeout(() => {
                setSceneId("/Scene4");
              }, [1500])

              // lottie.play("placeholder");
              // if (playing === false) {
              //   if (Assets?.intro) {
              //     Assets?.intro?.sounds[2]?.play();
              //     Assets?.intro?.sounds[2]?.on("end", () => {
              //     });
              //   }
              //   //
              // }
            }}
            style={{
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              cursor: playing === false ? "pointer" : "",
            }}
          />
          <div ref={Ref} className={`intro_Boy_container`}></div>
        </>
      }
    />
  );
}
