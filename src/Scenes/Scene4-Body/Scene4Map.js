const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "Scene2",

  Bg: `${imgUrl}Texture-BG_Light.svg`,

  sprites: [
    `${imgUrl}Organs_button/Nose_Button_Icon.svg`,
    `${imgUrl}Organs_button/Tongue_Button_Icon.svg`,
    `${imgUrl}Organs_button/Ear_Button_Icon.svg`,
    `${imgUrl}Organs_button/Skin_Button_Icon.svg`,
    `${imgUrl}Organs_button/Eye_Button_Icon.svg`,
    `${imgUrl}Skip_Btn.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_eyes.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_nose.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_ears.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_tongue.svg`,
    `${imgUrl}Scene3Images/SB_27_TI_skin.svg`,
  ],

  sounds: [`${soundUrl}lets_play_a_game.mp3`],

  lottie: [`${lottieUrl}main_character.json`],
};

export default IntroMap;
