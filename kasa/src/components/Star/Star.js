import PropTypes from "prop-types";

const Star = ({ filled }) => {
  return (
    <span style={{ color: filled ? "greenyellow" : "gray" }}>&#9733;</span>
  );
};

Star.propTypes = {
  filled: PropTypes.bool.isRequired,
};

export default Star;
