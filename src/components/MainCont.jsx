import { useState } from 'react';
import InputCont from './InputCont'
import DispCont from './DispCont'
import './css/mainCont.css'

function MainCont() {
  const [lastNumb, setLastNumb] = useState(0);
  const [currentNumb, setCurrentNumb] = useState(Math.floor(Math.random() * 10));
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [wrongAnswer, setWrongAnswer] = useState(0);

  const handleClick = (value) => {
    if (value === (lastNumb + currentNumb) % 10) {
      setCorrectAnswer(correctAnswer + 1);
    } else {
      setWrongAnswer(wrongAnswer + 1);
    }
    setLastNumb(currentNumb);
    setCurrentNumb(Math.floor(Math.random() * 10));
  }

  return (
    <div className='mainCont'>
    <DispCont currentNumb={currentNumb} correctAnswer={correctAnswer} wrongAnswer={wrongAnswer}/>
    <InputCont handleClick={handleClick}/>
    </div>
  )
}

export default MainCont;
