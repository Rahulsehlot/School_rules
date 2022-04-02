const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const Scene8Map = {
  id: "scene8",

  Bg: `${imgUrl}SB_19_Library_Intro_Bg.svg`,

  sprites: [
    `${imgUrl}SB_19_Library_Intro_Bg_Text.svg`,
    `${imgUrl}SB_19_Library_Intro_FG.svg`,
  ],

  sounds: [`${soundUrl}Scene8_Audio/EP_19_Audio_41.mp3`],

  lottie: [
    `${lottieUrl}Character_with_Lip_sync_Library.json`,
    `${lottieUrl}Character_01 Eyeblink.json`,
    `${lottieUrl}Character_02 Eyeblink.json`,
  ],
};

export default Scene8Map;
