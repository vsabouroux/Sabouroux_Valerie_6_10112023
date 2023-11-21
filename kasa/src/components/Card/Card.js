import "./Card.scss";

// "Card" est le composant qui décrit de quoi il est fait et la boucle "map" est faite sur la page qui doit afficher TOUS les logements soit la Home
function Card({ title, picture }) {
  return (
    <section className="Card">
      <div className="ContainerCard">
        <div className="TitreAppart">
          <img src={picture} alt="logement" className="CardImage" />
          <h1>{title}</h1>
        </div>
      </div>
    </section>
  );
}
export default Card;
