import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import montagneImage from "../../assets/montagne.png";
import Footer from "../../components/Footer/Footer";
import CollapseItem from "../../components/Collaps/Collaps";
import "./APropos.scss";

function APropos() {
  return (
    <div>
      <Header />
      <main>
        <Banner
          img={montagneImage}
          className="montagneImage"
          alt="vallée bordée de hautes montagnes au printemps"
        />
        <div className="APropos">
          <CollapseItem
            title="Fiabilité"
            content="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes."
          />
          <CollapseItem
            title="Respect"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <CollapseItem
            title="Service"
            content="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
          />
          <CollapseItem
            title="Sécurité"
            content="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default APropos;
