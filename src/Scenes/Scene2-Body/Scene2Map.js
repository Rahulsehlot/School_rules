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
    `${imgUrl}Skip_Btn.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_hear.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_see.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_smell.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_taste.svg`,
    `${imgUrl}Scene2Images/SB_27_TI_touch.svg`,
  ],

  sounds: [`${soundUrl}scene2_sound.mp3`],

  lottie: [`${lottieUrl}main_character.json`],
};

export default IntroMap;
