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
      <Banner
        img={montagneImage}
        alt="vallée bordée de hautes montagnes au printemps"
      />
      <div className="APropos">
        <CollapseItem
          title="Fiabilité"
          content="Donc là on génère le contenu de manière statique"
        />
        <CollapseItem title="Respect" content="Contenu de Respect" />
        <CollapseItem title="Service" content="Contenu de Service" />
        <CollapseItem title="Sécurité" content="Contenu de Sécurité" />
      </div>

      <Footer />
    </div>
  );
}
export default APropos;
