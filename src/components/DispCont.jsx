import NumberDisp from "./NumberDisp";
import ResultDisp from "./ResultDisp";
import PropTypes from "prop-types";
import "./css/dispCont.css";

function DispCont({ currentNumb, correctAnswer, wrongAnswer }) {
  return (
    <div className="dispCont">
      <NumberDisp currentNumb={currentNumb} />
      <ResultDisp correctAnswer={correctAnswer} wrongAnswer={wrongAnswer} />
    </div>
  );
}

DispCont.propTypes = {
  currentNumb: PropTypes.number.isRequired,
  correctAnswer: PropTypes.number.isRequired,
  wrongAnswer: PropTypes.number.isRequired,
};

export default DispCont;
