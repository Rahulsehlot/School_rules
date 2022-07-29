import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import lottie from "lottie-web";
import "../../styles/Scene3.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene5AssetMapScreen1 from "../Traces/Scene5Trace1";
import Scene5AssetMapScreen2 from "../Traces/Scene5Trace2";
import Scene5AssetMapScreen3 from "../Traces/Scene5Trace3";
import Scene5AssetMapScreen4 from "../Traces/Scene5Trace4";
import Scene5AssetMapScreen5 from "../Traces/Scene5Trace5";
import Scene5AssetMapScreen6 from "../Traces/Scene5Trace6";
import Scene7Map from "../Scene7/Scene7Map";

const get_ani_map = (val) => {
  switch (val) {
    case "Scene3AssetMapScreen1":
      return Scene5AssetMapScreen1;
      break;
    case "Scene3AssetMapScreen2":
      return Scene5AssetMapScreen2;
      break;
    case "Scene3AssetMapScreen3":
      return Scene5AssetMapScreen3;
      break;
    case "Scene3AssetMapScreen4":
      return Scene5AssetMapScreen4;
      break;
    case "Scene3AssetMapScreen5":
      return Scene5AssetMapScreen5;

    case "Scene3AssetMapScreen6":
      return Scene5AssetMapScreen6;
    case "Scene7Map":
      return Scene7Map;

    default:
      break;
  }
};

export default function Scene6({
  scenename,
  picture_Id,
  assetID,
  preLoad,
  prevScene,
  hideNxt,
  hide,
}) {
  const Next = useLoadAsset(preLoad);

  const { SceneId, setHideAllButtons setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const { Bg, setBg } = useContext(BGContext);

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets?.[assetID]?.sounds?.map((v) => v?.stop());
  };
  // setBg(Scene3screen1?.Bg);

  useEffect(() => {
    setBg(Assets?.Scene5screen1?.Bg);
    if (Assets?.[assetID]) {
      Assets?.[assetID]?.sounds[0]?.play();
      Assets?.[assetID]?.sounds[0]?.on("end", () => {
        setSceneId("/" + scenename);
      });
    }
  }, []);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/" + scenename);
  };

  const backward = () => {
    stop_all_sounds();
    setSceneId("/" + prevScene);
  };

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <Image
            src={Assets?.[assetID]?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="Questions"
          />
          <div className="Questions_text__container">

            <Image
              src={Assets?.[assetID]?.sprites[1]}
              alt="txt"
              id="fadeup"
              className="Questions_Text3"
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
