const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const IntroMap = {
  id: "Scene2",

  Bg: `${imgUrl}Welldone_BG.svg`,

  sprites: [`${imgUrl}replay_btn.svg`],

  sounds: [
    `${soundUrl}well_done.mp3`,
    `${soundUrl}mouse-click.mp3`,
    `${soundUrl}replayAudio.mp3`,
    `${soundUrl}cheering.mp3`,
  ],

  lottie: [`${lottieUrl}welldone_1.json`],
};

export default IntroMap;
