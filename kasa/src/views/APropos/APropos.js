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
          title="Élément 1"
          content="Donc là on génère le contenu de manière statique"
        />
        <CollapseItem title="Élément 2" content="Contenu de l'élément 2" />
        <CollapseItem title="Élément 3" content="Contenu de l'élément 3" />
        <CollapseItem title="Élément 4" content="Contenu de l'élément 4" />
      </div>

      <Footer />
    </div>
  );
}
export default APropos;
