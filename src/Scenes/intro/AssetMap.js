const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "intro",

  Bg: `${imgUrl}Intro-bg.svg`,

  sprites: [
    `${imgUrl}Intro-Text.svg`,
    `${imgUrl}Buttons-play.svg`,
    `${imgUrl}internal/images/sound.svg.svg`,
    `${imgUrl}internal/images/nosound.svg`,
  ],

  sounds: [],

  lottie: [`${lottieUrl}Boy_Lottie.json`],
};

export default IntroMap;
