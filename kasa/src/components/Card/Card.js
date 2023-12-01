import "./Card.scss";

// "Card" (vignettes de la pge Home) est le composant qui décrit de quoi il est fait
//et la boucle "map" est faite sur la page qui doit afficher TOUS les logements soit la Home
function Card({ title, picture }) {
  return (
    <article className="Card">
      <div>
        <img src={picture} alt="logement" className="CardImage" />
      </div>
      <h3>{title}</h3>
    </article>
  );
}

// function Card({ title, picture }) {
//   return (
//     // <section className="Card">
//     <div className="ContainerCard">
//       <div className="TitreAppart">
//         <img src={picture} alt="logement" className="CardImage" />
//         <h3>{title}</h3>
//       </div>
//     </div>
//     // </section>
//   );
// }
export default Card;
