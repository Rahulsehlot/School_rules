import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";

export default function WellDone({ scenename, BG_sound }) {
  // const Next = useLoadAsset(Scene5Map);

  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);

  const Ref = useRef(null);
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);

  const stop_all_sounds = () => {
    Assets[scenename]?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    if (Assets?.Welldone) {
      Assets?.Welldone?.sounds[0]?.play();
      Assets?.Welldone?.sounds[0]?.on("end", () => {
        Assets?.Welldone?.sounds[1]?.play();
        Assets?.Welldone?.sounds[1]?.on("end", () => {});
      });
    }
  }, [Assets, isLoading]);

  useEffect(() => {
    if (Assets && Ref.current) {
      setBg(Assets?.Welldone?.Bg);
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: false,
          autoplay: true,
          animationData: Assets?.Welldone?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref1.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.Welldone?.lottie[1],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);
  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref2.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.Welldone?.lottie[2],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  const forward = () => {
    BG_sound?.mute(true);
    stop_all_sounds();
    setSceneId("/");
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <div ref={Ref} className="WellDone_lottie_container"></div>
          <div ref={Ref1} className="text_lottie_container"></div>
          <div ref={Ref2} className="particles_lottie_container"></div>

          <Image
            src={Assets?.Welldone?.sprites[0]}
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
