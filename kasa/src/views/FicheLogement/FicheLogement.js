import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Slideshow from "../../components/Slideshow/Slideshow";
import CollapseItem from "../../components/Collaps/Collaps";
import Tag from "../../components/Tag/Tag";
import { useParams } from "react-router-dom";
import "./FicheLogement.scss";

// useParmas = hook utilisé pour extraire les paramètres de l'URL dans un composant fonctionnel. Ici on veut récupérer que les "pictures" du logement
// et on se repèrera avec l'id du logement

const FicheLogement = ({ logements }) => {
  // Récupérer les informatio du logement, grace al ID de URL et le data.json
  const { id } = useParams();
  // console.log("ID du logement :", id);
  const logement = logements.find((logement) => logement.id === id);
  // console.log("Logements :", logements);
  // console.log("Logement trouvé :", logement);

  if (!logement) {
    // Rediriger vers la page NoMatch si le logement n'est pas trouvé
    return (
      <div>
        <Link to="/NoMatch">
          <p>Logement introuvable</p>
        </Link>
      </div>
    );
  }

  //Si le logement est trouvé alors on affiche tout
  const { title, host, location, description, equipments, tags } = logement;

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
        <div>
          {/* erreur nom de propriété dans composant Tag. 
       j'utilisais la propriété "content" au lieu de "tags". En effet, dans Tag.js c'est bien la props "tags" que j'utilise
       il faut donc une cohérance */}
          <Tag tags={tags} />
        </div>
        <div className="MenuAccordeon">
          <CollapseItem title="Description" content={description} />
          <CollapseItem
            title="Équipements"
            content={
              <ul>
                {equipments.map((equipment, index) => (
                  <li key={index}>{equipment}</li>
                ))}
              </ul>
            }
          />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default FicheLogement;
