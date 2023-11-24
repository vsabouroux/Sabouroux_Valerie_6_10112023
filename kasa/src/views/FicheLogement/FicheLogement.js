import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./FicheLogement.scss";

/*revoir méthode children !*/

function FicheLogement() {
  let title = "";
  let pictures = "";
  // description,
  let host = "";
  // rating,
  // location,
  // equipments,
  // tags

  // Récupérer les informatio du logement, grace al ID de URL et le data.json

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
          {/*} <div class="back-arrow" id="backArrow"> <div class="back-arrow" id="backArrow">&#129144;</div></div>*/}
          {/* <button  &#62;"  className="nextarrow"></button> */}
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
