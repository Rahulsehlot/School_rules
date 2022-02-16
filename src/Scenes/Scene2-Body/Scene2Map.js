const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "Scene2",

  Bg: `${imgUrl}Intro-bg.svg`,

  sprites: [
    `${imgUrl}Smell.svg`,
    `${imgUrl}Taste.svg`,
    `${imgUrl}Hearing.svg`,
    `${imgUrl}Touch.svg`,
    `${imgUrl}Vision.svg`,
    `${imgUrl}Character.svg`,
    `${imgUrl}next.svg`,
  ],

  sounds: [`${soundUrl}scene2_sound.mp3`],

  lottie: [`${lottieUrl}main_character.json`],
};

export default IntroMap;
