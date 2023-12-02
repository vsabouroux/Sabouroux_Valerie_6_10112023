import "./Card.scss";

// "Card" (vignettes de la pge Home) est le composant qui décrit de quoi il est fait
//et la boucle "map" est faite sur la page qui doit afficher TOUS les logements soit la Home
function Card({ title, picture }) {
  return (
    <div className="Card">
      <img src={picture} alt="logement" className="CardImage" />
      <h3>{title}</h3>
    </div>
  );
}

export default Card;
