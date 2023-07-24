import PropTypes from "prop-types";
import "./css/startDisp.css";

function StartDisp({ startGame }) {
  return (
    <div className="startDisp">
      <h1>Arbetsminne</h1>
      <p>Svaret är alltid i ental 0-9 (10 = 0, 13 = 3 osv.)</p>
      <p>
        Svaret är alltid <span>summan</span> av det nummer som visas{" "}
        <span>plus</span> det förra numret som visades.
        <br /> (Första svaret är numret du ser då du inte har ett tidigare
        nummer.)
      </p>
      <p>
        Övningen är att upprepat hålla ett nummer i huvudet och svara ett annat
        utan att tappa bort sig.
        <br />
        <span>TIPS:</span> Om du tappar bort dig bör du fokusera om och offra
        ett nummer så att du vet vad förra numret är igen. Att gissa ger
        generellt fler fel än att offra ett nummer.
      </p>
      <button onClick={startGame}>Start</button>
    </div>
  );
}

StartDisp.propTypes = {
  startGame: PropTypes.func.isRequired,
};

export default StartDisp;
