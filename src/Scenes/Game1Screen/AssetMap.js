const imgUrl = '/internal/images/Organs/'
const img = '/internal/images/Organs_images/'
const Url = '/internal/images/'
const soundUrl = '/internal/sounds/'
const lottieUrl = '/internal/lottie/'

const IntroMap = {
  id: 'Scene2',

  Bg: `${Url}Intro-bg.svg`,

  sprites: [
    `${imgUrl}Nose.svg`,
    `${imgUrl}Tongue.svg`,
    `${imgUrl}Ear.svg`,
    `${imgUrl}Touch.svg`,
    `${imgUrl}Eye.svg`,
  ],

  sounds: [`${soundUrl}scene2_sound.mp3`],

  lottie: [`${lottieUrl}Scene_01.json`],

  select: ['Nose', 'Tongue', 'Ear', 'Touch', 'Eye'],
}

const Nose = {
  id: 'Nose_Id',

  images: [`${img}Dustbin.svg`, `${img}Perfume.svg`, `${img}Flower.svg`],
  //   `${img}Bell-sound.svg`,
  // `${img}Boy-watching-sunset.svg`,
  // `${img}Chocolate.svg`,
  // `${img}City.svg`,
  // `${img}Cup-cake.svg`,
  // `${img}Drums.svg`,
  // `${img}Grass.svg`,
  // `${img}Lemon.svg`,
  // `${img}Rainbow.svg`,
  // `${img}Sand.svg`,
  // `${img}Tambourine.svg`,
  // `${img}Teddy.svg`,
}

export default IntroMap
