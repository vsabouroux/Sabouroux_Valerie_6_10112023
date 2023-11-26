import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./FicheLogement.scss";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow/Slideshow";
import CollapseItem from "../../components/Collaps/Collaps";

// useParmas = hook utilisé pour extraire les paramètres de l'URL dans un composant fonctionnel. Ici on veut récupérer que les "pictures" du logement
// et on se repèrera avec l'id du logement

const FicheLogement = ({ logements }) => {
  // Récupérer les informatio du logement, grace al ID de URL et le data.json
  const { id } = useParams();
  console.log("ID du logement :", id);
  const logement = logements.find((logement) => logement.id === id);
  console.log("Logements :", logements);
  console.log("Logement trouvé :", logement);
  if (!logement) {
    // Gérer le cas où le logement n'est pas trouvé
    return <p>Logement introuvable</p>;
  }

  const { title, host, location, description, equipments } = logement;

  return (
    <div>
      <Header />

      <section>
        <div className="Carrousel">
          <Slideshow pictures={logement.pictures} />
        </div>
        <div className="Entete">
          <div className="GlobalLogemet">
            <h1 className="TitreLogement">{title}</h1>
            <div className="Location">{location}</div>{" "}
          </div>
          <div className="HostGlobal">
            <div className="Host">{host.name}</div>
            <img className="HostPicture" src={host.picture} alt="hôte" />
          </div>
        </div>
        <div className="MenuAccordeon">
          <CollapseItem title="Description" content={description} />
          <CollapseItem title="Équipements" content={equipments} />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FicheLogement;
