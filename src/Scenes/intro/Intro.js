import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./AssetMap";
import lottie from "lottie-web";
import "../../styles/intro.css";
import Image from "../../utils/elements/Image";

export default function Intro() {
  const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setSceneId, isLoading, setisLoading, Assets, setAssets } =
    useContext(SceneContext);
  const { intro } = Assets;
  const [playing, setplaying] = useState(false);

  const Ref = useRef(null);

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
            src={intro?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="senses_smell_img"
          />
          <div id="fadeup" className="senses_smell">
            SMELL
          </div>

          <Image
            src={intro?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_taste_img"
          />
          <div id="fadeup" className="senses_taste">
            TASTE
          </div>

          <Image
            src={intro?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_img"
          />
          <div id="fadeup" className="senses_hearing">
            HEARING
          </div>

          <Image
            src={intro?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="senses_touch_img"
          />
          <div id="fadeup" className="senses_touch">
            TOUCH
          </div>

          <Image
            src={intro?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="senses_vision_img"
          />

          <div id="fadeup" className="senses_vision">
            VISION
          </div>

          <Image
            className="play_btn"
            src={intro?.sprites[6]}
            alt="txt"
            id="fadeup"
            onClick={() => {
              if (playing === false) {
                setplaying(true);
                Assets?.intro?.sounds[0]?.play();

                Assets?.intro?.sounds[0].on("end", () => {
                  const timeout = setTimeout(() => {
                    setplaying(false);
                    setSceneId("/Scene2");
                  }, 3000);
                });
              }
            }}
            style={{
              // backgroundColor: 'Red',
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
            }}
          />
        </>
      }
    />
  );
}
