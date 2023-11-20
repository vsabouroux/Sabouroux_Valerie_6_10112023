import React from "react";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import coteImage from "../../assets/cote.png";
import Card from "../../components/Card/Card";
import Footer from "../../components/Footer/Footer";
import Logements from "../../datas/Logements.json";
import "./Home.scss";

function Home() {
  // useEffect(() => {
  //document.title = `Kasa`;
  // console.log("test");
  //}, []);

  return (
    <div className="App">
      <Header />
      <Banner img={coteImage} texte="Chez vous, partout et ailleurs" />
      <div className="Card">
        {Logements.map((logement, id) => (
          <Card key={id} title={logement.title} pictures={logement.pictures} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
export default Home;

//</div><Card title="Titre de la location" /><Card title="Test" />//
//<Card title="Test2" />
//<Card title="Test3" />
//<Card title="Test4" />
//<Card title="Test5" />
