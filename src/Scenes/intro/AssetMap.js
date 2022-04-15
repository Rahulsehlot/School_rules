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
    `${imgUrl}progress_bar/progress_bar.svg`,
    `${imgUrl}progress_bar/progress_bar_off.svg`,
    `${imgUrl}progress_bar/progress_bar_on.svg`,
    `${imgUrl}SB_19_TI_Classroom_Rules_Text.svg`,
    `${imgUrl}SB_19_Option_Box_Green_Highlight.svg`,
    `${imgUrl}SB_19_Option_Box_Red_Highlight.svg`,
    `${imgUrl}Skip_Btn.svg`,
  ],

  sounds: [
    `${soundUrl}great_work.mp3`,
    `${soundUrl}retry.mp3`,
    `${soundUrl}EP_19_Audio_02.mp3`,
  ],

  lottie: [`${lottieUrl}Boy_Lottie.json`, `${lottieUrl}1transition.json`],
};

export default IntroMap;
