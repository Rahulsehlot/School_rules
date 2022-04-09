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

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);
  const [autoPLayState, setautoPLayState] = useState(false);
  const [playBtnHide, SetplayBtnHide] = useState(0);

  const Ref = useRef(null);

  useEffect(() => {
    const shuffle_1 = Math.floor(0 + Math.random() * (2 - 0));
    const s1 = Scene4Map?.shuffle[shuffle_1];
    const s2 = Scene4Map?.shuffle_0[shuffle_1];
    setS1(Scene4Map?.[s1]);
    setaId(Scene4Map?.[s2]);
  }, [s1, aId]);

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

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <Image
            src={intro?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="senses_txt_img"
          />
          <Image
            className="play_btn"
            src={intro?.sprites[1]}
            alt="txt"
            id="fadeup"
            onClick={() => {
              lottie.play("placeholder");
              if (playing === false) {
                setautoPLayState(true);
                setplaying(true);
                const timeout = setTimeout(() => {
                  setplaying(false);
                  setSceneId("/Scene4");
                }, 500);
              }
            }}
            style={{
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
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
