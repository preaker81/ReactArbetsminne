import PropTypes from "prop-types";

function ResultDisp({ correctAnswer, wrongAnswer }) {
  return (
    <div className="resultDisp">
      <p>Antal {correctAnswer + wrongAnswer}</p>
      <p>Fel {wrongAnswer}</p>
    </div>
  );
}

ResultDisp.propTypes = {
  correctAnswer: PropTypes.number.isRequired,
  wrongAnswer: PropTypes.number.isRequired,
};

export default ResultDisp;
