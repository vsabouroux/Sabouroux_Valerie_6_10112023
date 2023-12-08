import React from "react";
import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import coteImage from "../../assets/cote.png";

import Card from "../../components/Card/Card";

import Footer from "../../components/Footer/Footer";
import Logements from "../../datas/Logements.json";
import "./Home.scss";

function Home() {
  return (
    <div className="App">
      <Header />
      <main>
        <Banner img={coteImage} texte="Chez vous, partout et ailleurs" />
        <section className="Appart">
          {/*Création boucle avec map pour afficher tous les logements présents dans le fichier Logements.json*/}
          {Logements.map(({ id, title, cover }) => (
            <Card
              title={title}
              picture={cover}
              id={id}
              alt={`${Logements.title}`}
            />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
export default Home;
