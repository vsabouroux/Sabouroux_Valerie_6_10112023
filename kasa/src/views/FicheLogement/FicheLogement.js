import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./FicheLogement.scss";

/*revoir méthode children !*/

function FicheLogement(
  title,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags
) {
  return (
    <div>
      <Header />
      <p>Fiche Logement en chantier...</p>
      <section>
        <div className="Caroussel">
          <img
            src={pictures}
            alt="description logement"
            className="LogementImage"
          />
          {/*insertion compteur image sur la photo avec un overlay ds le scss ? */}
        </div>
        <div className="TitleLogement">{title} </div>
        <div className="Host">{host}</div>
      </section>
      <Footer />
    </div>
  );
}

export default FicheLogement;
