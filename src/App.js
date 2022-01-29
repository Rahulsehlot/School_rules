import { useState, useEffect } from 'react'
import Intro from './Scenes/intro/Intro'
import GameContainer from './utils/GameContainer'
import Router from './utils/Router'
import './styles/app.css'
import Scene2 from './Scenes/Scene2-Body/Scene2'
import Game1 from './Scenes/Game1Screen/Game1'

function App() {
  const [Load, setLoad] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setLoad(false)
    }, 3000)
  }, [])

  if (Load) return <div className="intro_Loading_screen">Loading....</div>

  return (
    <GameContainer>
      <Router sceneId="/">
        <Intro />
      </Router>
      <Router sceneId="/Scene2">
        <Scene2 />
      </Router>
      <Router sceneId="/Game1">
        <Game1 />
      </Router>
    </GameContainer>
  )
}

export default App
