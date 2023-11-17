import { useEffect } from "react";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";
import coteImage from "../../assets/cote.png";
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

      <div></div>
    </div>
  );
}
export default Home;
