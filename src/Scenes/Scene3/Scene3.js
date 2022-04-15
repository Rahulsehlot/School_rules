import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import lottie from "lottie-web";
import "../../styles/Scene3.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene3AssetMapScreen1 from "../Traces/Scene2Trace1";
import Scene3AssetMapScreen2 from "../Traces/Scene2Trace2";
import Scene3AssetMapScreen3 from "../Traces/Scene2Trace3";
import Scene3AssetMapScreen4 from "../Traces/Scene2Trace4";
import Scene3AssetMapScreen5 from "../Traces/Scene2Trace5";
import Scene3AssetMapScreen6 from "../Traces/Scene2Trace6";
import Scene3AssetMapScreen7 from "../Traces/Scene2Trace7";

const get_ani_map = (val) => {
  switch (val) {
    case "Scene3AssetMapScreen1":
      return Scene3AssetMapScreen1;
      break;
    case "Scene3AssetMapScreen2":
      return Scene3AssetMapScreen2;
      break;
    case "Scene3AssetMapScreen3":
      return Scene3AssetMapScreen3;
      break;
    case "Scene3AssetMapScreen4":
      return Scene3AssetMapScreen4;
      break;
    case "Scene3AssetMapScreen5":
      return Scene3AssetMapScreen5;

    case "Scene3AssetMapScreen6":
      return Scene3AssetMapScreen6;
    case "Scene3AssetMapScreen7":
      return Scene3AssetMapScreen7;

    default:
      break;
  }
};

export default function Scene3({
  scenename,
  picture_Id,
  assetID,
  preLoad,
  prevScene,
  hideNxt,
  hide,
}) {
  const Next = useLoadAsset(preLoad);

  const { SceneId, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);
  const [isLoading, setisLoading] = useState(true);

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets?.[assetID]?.sounds?.map((v) => v?.stop());
  };
  // setBg(Scene3screen1?.Bg);

  useEffect(() => {
    setBg(Assets?.Scene3screen1?.Bg);
    if (isLoading === false) {
      if (Assets?.[assetID]) {
        Assets?.[assetID]?.sounds[0]?.play();
        Assets?.[assetID]?.sounds[0]?.on("end", () => {
          const timeout = setTimeout(() => {
            setSceneId("/" + scenename);
          }, 1500);
        });
      }
    }
  }, [isLoading]);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/" + scenename);
  };

  const backward = () => {
    stop_all_sounds();
    setSceneId("/" + prevScene);
  };

  const transRef = useRef(null);

  useEffect(() => {
    console.log(Assets?.intro?.lottie[1]);
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

          <Image
            src={Assets?.[assetID]?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Questions"
          />
          <div className="Questions_Text">
            <Image
              className="Questions_Img"
              src={Assets?.[assetID]?.sprites[1]}
              alt="txt"
              id="fadeup"
            />
          </div>

          <Image
            src={Assets?.Scene3screen1?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="backward"
            onClick={backward}
            style={{ display: hide === 1 ? "none" : "block" }}
          />
          <Image
            src={Assets?.Scene3screen1?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="forward"
            onClick={forward}
            style={{ display: hideNxt === 1 ? "none" : "block" }}
          />
        </>
      }
    />
  );
}
