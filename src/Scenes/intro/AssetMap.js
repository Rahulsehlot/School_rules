const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "intro",

  Bg: `${imgUrl}Intro-bg.svg`,

  sprites: [
    `${imgUrl}Intro-Text.svg`,
    `${imgUrl}Smell.svg`,
    `${imgUrl}Taste.svg`,
    `${imgUrl}Hearing.svg`,
    `${imgUrl}Touch.svg`,
    `${imgUrl}Vision.svg`,
    `${imgUrl}btn.svg`,
  ],

  sounds: [`${soundUrl}Intro_sound.mp3`],

  lottie: [`${lottieUrl}Scene_01.json`],
};

export default IntroMap;
