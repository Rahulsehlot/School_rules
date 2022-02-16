import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./Scene3Map";
import lottie from "lottie-web";
import "../../styles/Scene3.css";
import Image from "../../utils/elements/Image";

export default function Scene3Organs({
  next,
  setNext,
  imageId,
  soundId,
  PropId,
  position,
  scenename,
}) {
  const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const Ref = useRef(null);
  const [name, setName] = useState("");
  const [triggered, setTriggered] = useState(false);

  const stop_all_sounds = () => {
    Assets[scenename]?.sounds?.map((v) => v?.stop());
  };

  useEffect(() => {
    setName(IntroMap.select[next]);
    if (Assets?.Scene3 && !Loading) {
      Assets?.Scene3?.sounds[soundId].play();
      Assets?.Scene3?.sounds[soundId].on("end", () => {
        if (next < 4) {
          const nxtitem = next + 1;
          const item = IntroMap.select[nxtitem];
          setName(item);
          setNext(nxtitem);
          const samp = "/" + item + "_Scene3";
          if (triggered === false) {
            setSceneId(samp);
          }
        } else {
          if (triggered === false) {
            setSceneId("/Scene4");
          }
        }
      });
    }
  }, [Assets, Loading, isLoading]);

  const back = () => {
    setTriggered(true);
    stop_all_sounds();
    if (next > 0) {
      const nxtitem = next - 1;
      console.log(next);
      const item = IntroMap.select[nxtitem];
      setNext(nxtitem);
      console.log(nxtitem);
      const samp = "/" + item + "_Scene3";
      setSceneId(samp);
      console.log(samp);
    }
  };

  const forward = () => {
    stop_all_sounds();
    if (next < 4) {
      const nxtitem = next + 1;
      console.log(next);
      const item = IntroMap.select[nxtitem];
      setNext(nxtitem);
      console.log(nxtitem);
      const samp = "/" + item + "_Scene3";
      setSceneId(samp);
    } else {
      setSceneId("/Scene4");
    }
  };

  console.log(triggered);
  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          <Image
            src={Assets?.Scene3?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="Blue_layyer_wrapper"
          />

          <Image
            src={Assets?.Scene3?.sprites[imageId]}
            alt="txt"
            id="fadeup"
            className="senses_vision_img"
            style={{
              top: "20%",
              left: "6.5%",
            }}
          />

          <Image
            src={Assets?.Scene3?.sprites[PropId[0]]}
            alt="txt"
            id="fadeup"
            className={position + "Prop1"}
            style={{ position: "fixed", width: "20%" }}
          />

          <Image
            src={Assets?.Scene3?.sprites[PropId[1]]}
            alt="txt"
            id="fadeup"
            className={position + "Prop2"}
            style={{ position: "fixed", width: "20%" }}
          />
          <Image
            src={Assets?.Scene3?.sprites[PropId[2]]}
            alt="txt"
            id="fadeup"
            className={position + "Prop3"}
            style={{ position: "fixed", width: "20%" }}
          />
          <div id="fadeup" className="senses_scene3_txt">
            {name.toLowerCase()}
          </div>

          <Image
            src={Assets?.Scene3?.sprites[17]}
            alt="txt"
            id="fadeup"
            className="next"
            onClick={forward}
            style={{ cursor: "pointer" }}
          />
          <Image
            src={Assets?.Scene3?.sprites[18]}
            alt="txt"
            id="fadeup"
            className="back"
            onClick={back}
            style={{ cursor: "pointer" }}
          />

          {/* Title */}
        </>
      }
    />
  );
}
