import PropTypes from "prop-types";
import Star from "./Star";

const StarRating = ({ rating }) => {
  const filledStars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div>
      {filledStars.map((filled, index) => (
        <Star key={index} filled={filled} />
      ))}
    </div>
  );
};

StarRating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default StarRating;
