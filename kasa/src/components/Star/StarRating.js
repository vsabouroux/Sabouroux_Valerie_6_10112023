//import PropTypes from "prop-types";
import Star from "./Star";

// ici avec Array.from on crée un tableau d'étoiles qui va être parcouru
// et avec la condition "index<rating" cela veut dire que si la "lecture de la postion"
//est inférieur au nombre d'étoiles du logement alors avec "map" on va colorer le bon nb d'étoiles
const StarRating = ({ rating }) => {
  const filledStars = Array.from({ length: 5 }, (_, index) => index < rating);

  return (
    <div className="star-global">
      {/* la méthode map permet de parcourir le tableau et de colorer le bon nb d'étoiles */}
      {filledStars.map((filled, index) => (
        <Star key={index} filled={filled} />
      ))}
    </div>
  );
};
// j'aurais bien voulu que si on se trompe dans le fichier data il y ait une alerte mais ce n'est pas probant
//juste les étoiles grises !
// StarRating.propTypes = {
//   rating: PropTypes.number.isRequired,
// };

export default StarRating;
