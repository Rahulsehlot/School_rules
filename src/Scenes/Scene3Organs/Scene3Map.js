const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "Scene3",

  Bg: `${imgUrl}Texture-BG_Light.svg`,

  sprites: [
    `${imgUrl}/Organs/Nose.svg`,
    `${imgUrl}/Organs/Tongue.svg`,
    `${imgUrl}/Organs/Ear.svg`,
    `${imgUrl}/Organs/Touch.svg`,
    `${imgUrl}/Organs/Eye.svg`,
    `${imgUrl}Blue-Layer.svg`,
    `${imgUrl}Organs_images/Girl-touching-flower.svg`,
    `${imgUrl}Organs_images/Girl-smelling-food.svg`,
    `${imgUrl}Organs_images/Boy-smelling-Waste.svg`,
    `${imgUrl}Organs_images/Boy-eating-lemon.svg`,
    `${imgUrl}Organs_images/Boy-eating-chilli.svg`,
    `${imgUrl}Organs_images/Girl-eating-Icecream.svg`,
    `${imgUrl}Organs_images/Car-sound.svg`,
    `${imgUrl}Organs_images/Girl-lisinting-sound.svg`,
    `${imgUrl}Organs_images/Speaker-sound.svg`,
    `${imgUrl}Organs_images/Touching-cat.svg`,
    `${imgUrl}Organs_images/Touching-stone.svg`,
  ],

  sounds: [
    `${soundUrl}this_is_our_nose.mp3`,
    `${soundUrl}this_is_our_tongue.mp3`,
    `${soundUrl}this_is_our_ears.mp3`,
    `${soundUrl}this_is_our_skin.mp3`,
    `${soundUrl}this_is_our_eyes.mp3`,
    `${soundUrl}scene2_sound.mp3`,
  ],

  lottie: [],

  //   eyeobj: [`${eye}Eye.svg`],
  select: ["Eyes", "Nose", "Tongue", "Ears", "Skin"],
};

export default IntroMap;
