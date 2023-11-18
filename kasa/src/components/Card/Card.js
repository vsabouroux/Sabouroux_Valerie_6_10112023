import "./Card.scss";

// Récupération des Logements sur le localhost du BackEnd

function Card(title, imageUrl) {
  return (
    <section className="Card">
      <div className="ContainerCard">
        <h1>Titre de la location</h1>
      </div>
    </section>
  );
}
export default Card;
