//"prop-types" est un package utilisé pour spécifier
//et valider les types des propriétés (props) passées à un composant React.
//ici on dit que la props "filled" est de type booléen et qu'il est "obligatoire"
import PropTypes from "prop-types";
import "./Star.scss";

const Star = ({ filled }) => {
  return (
    // <div className="star-global">
    <span className={filled ? "star" : "star-vide"}>&#9733;</span>
    // </div>
  );
};

Star.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default Star;
