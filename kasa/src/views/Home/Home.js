import { useEffect } from "react";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import coteImage from "../../assets/cote.png";
import Card from "../../components/Card/Card";
import "./Home.scss";

function Home() {
  useEffect(() => {
    document.title = `Kasa`;
    // console.log("test");
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner img={coteImage} texte="Chez vous, partout et ailleurs" />
      <Card />
    </div>
  );
}
export default Home;
