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
    `${imgUrl}Organs_button/Dotted-Line.svg`,
    `${imgUrl}Organs_images/Boy-watching-sunset_Eye.svg`,
    `${imgUrl}Organs_images/Boy-smelling-rose_Nose.svg`,
    `${imgUrl}Organs_images/Bell-sound_Ear.svg`,
    `${imgUrl}Organs_images/Cup-cake_Tongue.svg`,
    `${imgUrl}Organs_images/Teddy_Skin.svg`,
    `${imgUrl}Organs_images/City_Eye.svg`,
    `${imgUrl}Organs_images/Perfume_Nose.svg`,
    `${imgUrl}Organs_images/Tambourine_Ear.svg`,
    `${imgUrl}Organs_images/Chocolates_Tongue.svg`,
    `${imgUrl}Organs_images/Sand_Skin.svg`,
    `${imgUrl}Organs_images/Rainbow_Eye.svg`,
    `${imgUrl}Organs_images/Dustbin_Nose.svg`,
    `${imgUrl}Organs_images/Drums_Ear.svg`,
    `${imgUrl}Organs_images/Lemon_Tongue.svg`,
    `${imgUrl}Organs_images/Grass_Skin.svg`,
    `${imgUrl}Audio_replay_button.svg`,
    `${imgUrl}Hand_Icon.svg`,
    `${imgUrl}Button_Icon_Green_Highlight.svg`,
    `${imgUrl}Button_Icon_Red_Highlight.svg`,
  ],

  sounds: [
    `${soundUrl}scene2_sound.mp3`,
    `${soundUrl}6.mp3`,
    `${soundUrl}7.mp3`,
    `${soundUrl}8.mp3`,
    `${soundUrl}9.mp3`,
    `${soundUrl}10.mp3`,
    `${soundUrl}11.mp3`,
    `${soundUrl}12.mp3`,
    `${soundUrl}13.mp3`,
    `${soundUrl}14.mp3`,
    `${soundUrl}15.mp3`,
    `${soundUrl}16.mp3`,
    `${soundUrl}17.mp3`,
    `${soundUrl}18.mp3`,
    `${soundUrl}19.mp3`,
    `${soundUrl}20.mp3`,
    `${soundUrl}great_work.mp3`,
    `${soundUrl}try_again.mp3`,
    `${soundUrl}countdown.mp3`,
    `${soundUrl}mouse-click.mp3`,
  ],

  lottie: [],

  select: ["Nose", "Tongue", "Ear", "Touch", "Eye"],

  counter: 6,
};

export default IntroMap;
