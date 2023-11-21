import React from "react";

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
          <Card key={id} title={title} picture={cover} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Home;
