import { useContext, useRef, useEffect } from "react";
import { SceneContext } from "../../contexts/SceneContext";
import Scenes from "../../utils/Scenes";
import useLoadAsset from "../../utils/useLoadAsset";
import PlayAudio from "../../utils/playAudio";
import lottie from "lottie-web";
import "../../styles/Scene2.css";
import Image from "../../utils/elements/Image";
import { BGContext } from "../../contexts/Background";
import Scene5AssetMapScreen1 from "../Traces/Scene5Trace1";

export default function Scene5({ scenename }) {
  const Next = useLoadAsset(Scene5AssetMapScreen1);

  // const { Bg, Loading } = useLoadAsset(IntroMap);
  const { SceneId, setHideAllButtons, setSceneId, Assets, setAssets } = useContext(SceneContext);
  const { intro } = Assets;
  const [isLoading, setisLoading] = useState(true);

  const { Bg, setBg } = useContext(BGContext);

  const Ref = useRef(null);

  const stop_all_sounds = () => {
    Assets?.scene5?.sounds?.map((v) => v?.stop());
    Assets?.scene5?.sounds[0]?.stop();
  };

  useEffect(() => {
    if (Assets?.scene5) {
      Assets?.scene5?.sounds[0]?.play();
      Assets?.scene5?.sounds[0]?.on("end", () => {
        setSceneId("/Scene5_1");
      });
    }
  }, []);

  useEffect(() => {
    setBg(Assets?.scene5?.Bg);
  }, []);

  const forward = () => {
    stop_all_sounds();
    setSceneId("/Scene5_1");
  };

  const transRef = useRef(null);

  useEffect(() => {
    setHideAllButtons(isLoading)
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
            src={Assets?.scene5?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="scene5Txt"
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
