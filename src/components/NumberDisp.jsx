import PropTypes from "prop-types";
import "./css/numberDisp.css";

function NumberDisp({ currentNumb }) {
  return (
    <div className="numberDisp">
      <p>{currentNumb}</p>
    </div>
  );
}

NumberDisp.propTypes = {
  currentNumb: PropTypes.number.isRequired,
};

export default NumberDisp;
