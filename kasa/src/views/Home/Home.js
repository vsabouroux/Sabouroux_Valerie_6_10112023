import React from "react";
import { Link } from "react-router-dom";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import coteImage from "../../assets/cote.png";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Logements from "../../datas/Logements.json";
import "./Home.scss";

//Création boucle avec map pour afficher tous les logements présents dans le fichier Logements.json
function Home() {
  return (
    <div className="App">
      <Header />
      <Banner img={coteImage} texte="Chez vous, partout et ailleurs" />
      <div className="Appart">
        {Logements.map(({ id, title, cover }) => (
          <Link key={id} to={`/FicheLogement/${id}`}>
            {/* Utilisez le composant Link pour créer un lien vers la page FicheLogement avec l'ID du logement */}
            <Card title={title} picture={cover} />
          </Link>
        ))}
      </div>
      {/*<FicheLogement />*/}
      <Footer />
    </div>
  );
}
export default Home;
