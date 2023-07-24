import PropTypes from "prop-types";
import AnswerBtn from "./AnswerBtn";
import "./css/inputCont.css";

function InputCont({ handleClick }) {
  return (
    <div className="inputCont">
      {[...Array(10).keys()].map((i) => (
        <AnswerBtn key={i} value={i} handleClick={handleClick} />
      ))}
    </div>
  );
}

InputCont.propTypes = {
  handleClick: PropTypes.func.isRequired,
};

export default InputCont;
