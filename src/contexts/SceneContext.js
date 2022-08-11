import { createContext, useState, useEffect } from "react";

export const SceneContext = createContext();

export default function SceneContextProvider({ children }) {
  const [SceneId, setSceneId] = useState("/");
  const [isLoading, setisLoading] = useState(true);
  // state to manage sounds and images for each scene
  const [Assets, setAssets] = useState({});
  const [Starz, setStarz] = useState(0);
  const [height, setheight] = useState("73%");
  const [count, setcount] = useState(0);
  const [Ipad, setIpad] = useState(false);
  const [LandScape, setLandScape] = useState(false);
  const [transition, setTransition] = useState(null);
  const [hideAllButtons, setHideAllButtons] = useState(true)
  const [nextButtonPressed, setnextButtonPressed] = useState(false)
  const [backButtonPressed, setbackButtonPressed] = useState(false)
  const [skipButtonPressed, setskipButtonPressed] = useState(false)
  const [playBGSound, setPlayBGSound] = useState(false)
  const [BG_sound, setBG_sound] = useState(null);
  // loading part
  useEffect(() => {
    setTimeout(() => {
      setisLoading(false);
    }, 3500);
  }, [isLoading]);

  return (
    <SceneContext.Provider
      value={{
        LandScape,
        setLandScape,
        SceneId,
        setSceneId,
        isLoading,
        setisLoading,
        Assets,
        setAssets,
        Starz,
        setStarz,
        height,
        setheight,
        transition,
        setTransition,
        count,
        setcount,
        Ipad,
        setIpad,
        hideAllButtons,
        setHideAllButtons,
        nextButtonPressed,
        backButtonPressed,
        skipButtonPressed,
        setnextButtonPressed,
        setbackButtonPressed,
        setskipButtonPressed,
        playBGSound,
        setPlayBGSound,
        BG_sound, setBG_sound
      }}
    >
      {children}
    </SceneContext.Provider>
  );
}
