import PropTypes from "prop-types";

function AnswerBtn({ value, handleClick }) {
  return <button onClick={() => handleClick(value)}>{value}</button>;
}

AnswerBtn.propTypes = {
  value: PropTypes.number.isRequired,
  handleClick: PropTypes.func.isRequired,
};

export default AnswerBtn;
