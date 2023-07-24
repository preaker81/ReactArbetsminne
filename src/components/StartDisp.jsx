import PropTypes from 'prop-types';

function StartDisp({ startGame }) {
  return (
    <div>
      <h1>Welcome to the Game!</h1>
      <button onClick={startGame}>Start</button>
    </div>
  )
}

StartDisp.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default StartDisp;
