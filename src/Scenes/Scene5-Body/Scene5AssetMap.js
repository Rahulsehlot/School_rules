const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "Scene2",

  Bg: `${imgUrl}Texture-BG_Light.svg`,

  sprites: [
    `${imgUrl}Organs/Eye.svg`,
    `${imgUrl}Newspaper.svg`,
    `${imgUrl}Sun.svg`,
    `${imgUrl}Arrow_Icon.svg`,
  ],

  sounds: [`${soundUrl}Game2_sound.mp3`],

  lottie: [`${lottieUrl}main_character.json`],
};

export default IntroMap;
