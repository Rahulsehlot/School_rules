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

const imgUrl = "internal/images/";
const soundUrl = "internal/sounds/";
const lottieUrl = "internal/lottie/";

const Scene4Map = {
  id: "Scene4",

  Bg: `${imgUrl}Classroom_Bg.svg`,

  sprites: [`${imgUrl}Classroom_Bg_Text.svg`],

  sounds: [`${soundUrl}scene4_Audio.mp3`],

  lottie: [],
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

export default Scene4Map;
