import { useContext, useRef, useEffect } from 'react'
import { SceneContext } from '../../contexts/SceneContext'
import Scenes from '../../utils/Scenes'
import useLoadAsset from '../../utils/useLoadAsset'
import PlayAudio from '../../utils/playAudio'
import IntroMap from './AssetMap'
import lottie from 'lottie-web'
import '../../styles/Scene2.css'
import Image from '../../utils/elements/Image'

export default function Scene2() {
  const { Bg, Loading } = useLoadAsset(IntroMap)
  const {
    SceneId,
    setSceneId,
    isLoading,
    setisLoading,
    Assets,
    setAssets,
  } = useContext(SceneContext)
  const { intro } = Assets

  const Ref = useRef(null)

  useEffect(() => {
    if (Assets?.Scene2 && !Loading) {
      PlayAudio(Assets?.Scene2?.sounds[0], () => {
        setSceneId('/Game1')
      })
      // setSceneId('/')
      console.log(Assets?.Scene2?.sounds[0])
    }
  }, [Assets, Loading, isLoading])

  console.log(Assets?.Scene2)

  return (
    <Scenes
      Bg={Bg}
      sprites={
        <>
          {/* Title */}

          <Image
            src={Assets?.Scene2?.sprites[0]}
            alt="txt"
            id="fadeup"
            className="senses_smell_img_scene2"
          />

          <Image
            src={Assets?.Scene2?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="senses_taste_img_scene2"
          />
          <Image
            src={Assets?.Scene2?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_img_scene2"
          />
          <Image
            src={Assets?.Scene2?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="senses_touch_img_scene2"
          />

          <Image
            src={Assets?.Scene2?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="senses_vision_img_scene2"
          />

          <Image
            src={Assets?.Scene2?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="senses_character_img_scene2"
          />
        </>
      }
    />
  )
}
