const imgUrl = "ee03_ow_tnb_pl1/images/";
const soundurl = "ee03_ow_tnb_pl1/sounds/";
const lottieUrl = "ee03_ow_tnb_pl1/lottie/";

const Game1Map = {
  id: "Game1",

  Bg: `${imgUrl}texture_bg_light.svg`,

  sprites: [
    `${imgUrl}organs_button/nose_button_icon.svg`,
    `${imgUrl}organs_button/tongue_button_icon.svg`,
    `${imgUrl}organs_button/ear_button_icon.svg`,
    `${imgUrl}organs_button/skin_button_icon.svg`,
    `${imgUrl}organs_button/eye_button_icon.svg`,
    `${imgUrl}organs_button/dotted_line.svg`,
    `${imgUrl}organs_images/boy_watching_sunset_eye.svg`,
    `${imgUrl}organs_images/boy_smelling_rose_nose.svg`,
    `${imgUrl}organs_images/bell_sound_ear.svg`,
    `${imgUrl}organs_images/cup_cake_tongue.svg`,
    `${imgUrl}organs_images/teddy_skin.svg`,
    `${imgUrl}organs_images/city_eye.svg`,
    `${imgUrl}organs_images/perfume_nose.svg`,
    `${imgUrl}organs_images/tambourine_ear.svg`,
    `${imgUrl}organs_images/chocolates_tongue.svg`,
    `${imgUrl}organs_images/sand_skin.svg`,
    `${imgUrl}organs_images/rainbow_eye.svg`,
    `${imgUrl}organs_images/dustbin_nose.svg`,
    `${imgUrl}organs_images/drums_ear.svg`,
    `${imgUrl}organs_images/lemon_tongue.svg`,
    `${imgUrl}organs_images/grass_skin.svg`,
    `${imgUrl}audio_replay_button.svg`,
    `${imgUrl}hand_icon.svg`,
    `${imgUrl}button_icon_green_highlight.svg`,
    `${imgUrl}button_icon_red_highlight.svg`,
    `${imgUrl}hand_icon.svg`,
  ],

  sounds: [
    `${soundurl}scene2_sound.mp3`,
    `${soundurl}6.mp3`,
    `${soundurl}7.mp3`,
    `${soundurl}8.mp3`,
    `${soundurl}9.mp3`,
    `${soundurl}10.mp3`,
    `${soundurl}11.mp3`,
    `${soundurl}12.mp3`,
    `${soundurl}13.mp3`,
    `${soundurl}14.mp3`,
    `${soundurl}15.mp3`,
    `${soundurl}16.mp3`,
    `${soundurl}17.mp3`,
    `${soundurl}18.mp3`,
    `${soundurl}19.mp3`,
    `${soundurl}20.mp3`,
    `${soundurl}correct_answer_game2.mp3`,
    `${soundurl}wrong_answer_game2.mp3`,
    `${soundurl}countdown.mp3`,
    `${soundurl}mouse_click.mp3`,
  ],

  lottie: [],

  select: ["Nose", "Tongue", "Ear", "Touch", "Eye"],

  hint: ["Eyes", "Nose", "Ears", "Tongue", "Skin"],

  counter: 6,
};

export default Game1Map;
