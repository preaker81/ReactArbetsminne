import AnswerBtn from './AnswerBtn'
import './css/inputCont.css'

function InputCont() {

  return (
    <div className='inputCont'>
    {[...Array(10).keys()].map(i => <AnswerBtn key={i} value={i} />)}
    </div>
  )
}

export default InputCont
