import PropTypes from "prop-types";

function AnswerBtn({ value }) {
  return <button>{value}</button>;
}

AnswerBtn.propTypes = {
  value: PropTypes.number.isRequired,
};

export default AnswerBtn;
