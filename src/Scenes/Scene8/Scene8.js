import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import lottie from "lottie-web";
import "../../styles/Scene3.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene9AssetMapScreen1 from "../Traces/Scene9trace1";

export default function Scene8({
  scenename,
  assetID,
  preLoad,
  prevScene,
  hideNxt,
  hide,
}) {
  const { Loading } = useLoadAsset(Scene9AssetMapScreen1);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);

  const stop_all_sounds = () => {
    Assets?.scene8?.sounds?.map((v) => v?.stop());
  };
  // setBg(Scene3screen1?.Bg);
  const Ref = useRef(null);
  const Ref_1 = useRef(null);
  const Ref_3 = useRef(null);

  useEffect(() => {
    if (Assets && Ref.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.scene8?.lottie[0],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (Assets && Ref_1.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref_1.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.scene8?.lottie[1],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    if (Assets && Ref_3.current) {
      try {
        lottie.loadAnimation({
          name: "placeholder",
          container: Ref_3.current,
          renderer: "svg",
          loop: true,
          autoplay: true,
          animationData: Assets?.scene8?.lottie[2],
        });
      } catch (err) {
        console.log(err);
      }
    }
  }, []);

  useEffect(() => {
    setBg(Assets?.scene8?.Bg);
    if (Assets?.scene8) {
      Assets?.scene8?.sounds[0]?.play();
      Assets?.scene8?.sounds[0]?.on("end", () => {
        setSceneId("/Scene9Screen1");
      });
    }
  }, []);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/Scene9Screen1");
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}
          <div ref={Ref} className="Scene8_lottie_container_1"></div>
          <div ref={Ref_1} className="Scene8_lottie_container_2"></div>
          <div ref={Ref_3} className="Scene8_lottie_container_3"></div>

          <Image
            src={Assets?.scene8?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Library_Text"
          />
          <Image
            src={Assets?.scene8?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="Library_ForeGround"
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
