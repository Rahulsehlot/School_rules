import { useContext, useRef, useEffect, useState } from 'react'
import { SceneContext } from '../../contexts/SceneContext'
import Scenes from '../../utils/Scenes'
import useLoadAsset from '../../utils/useLoadAsset'
import PlayAudio from '../../utils/playAudio'
import IntroMap from './AssetMap'
import lottie from 'lottie-web'
import '../../styles/Game1.css'
import Image from '../../utils/elements/Image'

export default function Game1() {
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
        // setSceneId('/')
      })
    }
  }, [Assets, Loading, isLoading])

  const [id, setId] = useState(0)
  useEffect(() => {
    // setId(id+1)
    const help = IntroMap.select[id]
    console.log(help)
    console.log(id)
  }, [])

  const smell = () => {
    setId(id + 1)
    console.log('sadassddassdasdas')
  }

  console.log(id)

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
            className="senses_smell_img_game1"
            onClick={() => {
              const navi = () => {
                setTimeout(() => {
                  setSceneId('/Summer')
                }, 1000)
              }

              // PlayAudio(intro?.sounds[0], navi)
            }}
          />

          <Image
            src={Assets?.Scene2?.sprites[1]}
            alt="txt"
            id="fadeup"
            className="senses_taste_img_game1"
          />
          <Image
            src={Assets?.Scene2?.sprites[2]}
            alt="txt"
            id="fadeup"
            className="senses_hearing_img_game1"
          />
          <Image
            src={Assets?.Scene2?.sprites[3]}
            alt="txt"
            id="fadeup"
            className="senses_touch_img_game1"
          />

          <Image
            src={Assets?.Scene2?.sprites[4]}
            alt="txt"
            id="fadeup"
            className="senses_vision_img_game1"
          />

          <Image
            src={Assets?.Scene2?.sprites[5]}
            alt="txt"
            id="fadeup"
            className="senses_character_img_game1"
          />
        </>
      }
    />
  )
}
