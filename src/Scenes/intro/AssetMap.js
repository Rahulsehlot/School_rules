import Game1Trace1Map from "../Traces/Game1Trace1";
import Game1Trace2Map from "../Traces/Game1Trace2";
import Game1Trace3Map from "../Traces/Game1Trace3";
import Game1Trace4Map from "../Traces/Game1Trace4";
import Game1Trace5Map from "../Traces/Game1Trace5";
import Game1Trace6Map from "../Traces/Game1Trace6";
import Game1Trace7Map from "../Traces/Game1Trace7";
import Game1Trace8Map from "../Traces/Game1Trace8";
import Game1Trace9Map from "../Traces/Game1Trace9";
import Game1Trace10Map from "../Traces/Game1Trace10";
import Game1Trace11Map from "../Traces/Game1Trace11";
const imgUrl = "ee03_ow_tnb_pl1/images/";
const soundurl = "ee03_ow_tnb_pl1/sounds/";
const lottieUrl = "ee03_ow_tnb_pl1/lottie/";

const IntroMap = {
  id: "intro",

  Bg: `${imgUrl}intro_bg.svg`,

  sprites: [
    `${imgUrl}intro_text.svg`,
    `${imgUrl}buttons_play.svg`,
    `${imgUrl}progress_bar/progress_bar.svg`,
    `${imgUrl}progress_bar/progress_bar_off.svg`,
    `${imgUrl}progress_bar/progress_bar_on.svg`,
    `${imgUrl}sb_19_ti_classroom_rules_text.svg`,
    `${imgUrl}sb_19_option_box_green_highlight.svg`,
    `${imgUrl}sb_19_option_box_red_highlight.svg`,
    `${imgUrl}skip_btn.svg`,
    `${imgUrl}foreground_bg.svg`,
    `${imgUrl}school.svg`,
  ],

  sounds: [
    `${soundurl}great_work.mp3`,
    `${soundurl}retry.mp3`,
    `${soundurl}ep_19_audio_02.mp3`,
  ],

  lottie: [`${lottieUrl}boy_lottie.json`, `${lottieUrl}1transition.json`],

  shuffle: ["shuffle1", "shuffle2"],
  shuffle_0: ["assetId1", "assetId2"],

  shuffle1: [
    Game1Trace1Map,
    Game1Trace2Map,
    Game1Trace3Map,
    Game1Trace4Map,
    Game1Trace5Map,
    Game1Trace6Map,
    Game1Trace7Map,
  ],

  shuffle2: [
    Game1Trace8Map,
    Game1Trace9Map,
    Game1Trace10Map,
    Game1Trace11Map,
    Game1Trace1Map,
    Game1Trace2Map,
    Game1Trace3Map,
  ],

  assetId1: [
    "Game1Trace1",
    "Game1Trace2",
    "Game1Trace3",
    "Game1Trace4",
    "Game1Trace5",
    "Game1Trace6",
    "Game1Trace7",
  ],

  assetId2: [
    "Game1Trace8",
    "Game1Trace9",
    "Game1Trace10",
    "Game1Trace11",
    "Game1Trace1",
    "Game1Trace2",
    "Game1Trace3",
  ],
};

export default IntroMap;
