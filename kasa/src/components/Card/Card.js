import "./Card.scss";
import { Link } from "react-router-dom";

// "Card" (vignettes de la pge Home) est le composant qui décrit de quoi il est fait
//et la boucle "map" est faite sur la page qui doit afficher TOUS les logements soit la Home
function Card({ title, picture, id }) {
  return (
    <Link className="card-link" to={`/FicheLogement/${id}`}>
      <div className="Card">
        <img src={picture} alt="logement" className="CardImage" />
        <h3>{title}</h3>
      </div>
    </Link>
  );
}

export default Card;
