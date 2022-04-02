import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene5Map from "../Scene5-Body/Scene5AssetMap";

export default function WellDone1({ scenename }) {
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);

  const Ref = useRef(null);
  const Ref1 = useRef(null);
  const Ref2 = useRef(null);

  useEffect(() => {
    if (Assets?.Welldone) {
      Assets?.Welldone?.sounds[1]?.play();
      Assets?.Welldone?.sounds[1]?.on("end", () => {
        Assets?.Welldone?.sounds[2]?.play();
        Assets?.Welldone?.sounds[1]?.on("end", () => {
          lottie.stop("character_Lottie");
        });
      });
    }
  }, []);

  useEffect(() => {
    if (Assets && Ref.current) {
      setBg(Assets?.Welldone?.Bg);
      try {
        lottie.loadAnimation({
          name: "character_Lottie",
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

  const replay = () => {
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
            src={Assets?.Welldone?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="ReplayBTN"
            onClick={replay}
            style={{ cursor: "pointer" }}
          />
        </>
      }
    />
  );
}
