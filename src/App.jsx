import { useState } from 'react';
import MainCont from "./components/MainCont"
import StartDisp from "./components/StartDisp"

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const startGame = () => {
    setGameStarted(true);
  }

  return (
    <>
      {!gameStarted && <StartDisp startGame={startGame} />}
      {gameStarted && <MainCont />}
    </>
  )
}

export default App
