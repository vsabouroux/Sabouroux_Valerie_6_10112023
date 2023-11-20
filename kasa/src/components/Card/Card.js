import "./Card.scss";

// Récupération des Logements sur le localhost du BackEnd ??? je ne crois pas puisqu'ils fournissent un fichier avec les logements
//On va pouvoir récupérer les 2 "props" (title et imageUrl) dans le composant
function Card({ title, pictures }) {
  return (
    <section className="Card">
      <div className="ContainerCard">
        <div className="TitreAppart">
          <h1>{title}</h1>
          {pictures.map((picture, index) => (
            // eslint-disable-next-line no-template-curly-in-string
            <img key={index} src={picture} alt="logement-${index}" />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Card;
