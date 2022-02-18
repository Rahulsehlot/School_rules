import { useContext, useRef, useEffect, useState } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import IntroMap from "./AssetMap";
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

          <Image
            src={intro?.sprites[7]}
            alt="txt"
            id="fadeup"
            className="senses_smell"
          />
          <Image
            src={intro?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_taste_img"
          />

          <Image
            src={intro?.sprites[8]}
            alt="txt"
            id="fadeup"
            className="senses_taste"
          />

          <Image
            src={intro?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_img"
          />

          <Image
            src={intro?.sprites[9]}
            alt="txt"
            id="fadeup"
            className="senses_hearing"
          />

          <Image
            src={intro?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="senses_touch_img"
          />

          <Image
            src={intro?.sprites[10]}
            alt="txt"
            id="fadeup"
            className="senses_touch"
          />

          <Image
            src={intro?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="senses_vision_img"
          />

          <Image
            src={intro?.sprites[11]}
            alt="txt"
            id="fadeup"
            className="senses_vision"
          />

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
                  }, 1500);
                });
              }
            }}
            style={{
              // backgroundColor: 'Red',
              borderRadius: "100%",
              alignItems: "center",
              justifyContent: "center",
              display: "flex",
              cursor: playing === false ? "pointer" : "",
            }}
          />
        </>
      }
    />
  );
}
