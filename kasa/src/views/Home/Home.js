import { useEffect } from "react";

import Header from "../../components/Header/Header";
import Banner from "../../components/Banner/Banner";

import "./Home.scss";

function Home() {
  useEffect(() => {
    document.title = `Kasa`;
    // console.log("test");
  }, []);

  return (
    <div className="App">
      <Header />
      <Banner img="" texte="Chez vous, partout et ailleurs" />

      <div></div>
    </div>
  );
}
export default Home;
