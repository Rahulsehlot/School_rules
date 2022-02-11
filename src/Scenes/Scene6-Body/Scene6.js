import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene6AssetMap";
import lottie from "lottie-web";
import "../../styles/Scene4.css";
import Image from "../../utils/elements/Image";

export default function Scene6() {
  const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;

  const Ref = useRef(null);

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      Assets?.Scene2?.sounds[0]?.play();
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

  return <Scenes Bg={Bg} />;
}
