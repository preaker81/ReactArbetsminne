import NumberDisp from "./NumberDisp"
import ResultDisp from "./ResultDisp"
import './css/dispCont.css'

function DispCont() {
  return (
    <div className="dispCont">
    <NumberDisp/>
    <ResultDisp/>
    </div>
  )
}

export default DispCont