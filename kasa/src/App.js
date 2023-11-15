import { useEffect } from "react";
import KasaLogo from "./assets/KasaLogo.png";
import Home from "./views/Home/Home";
import NoMatch from "./views/NoMatch/NoMatch";
import "./styles/App.css";
import Banner from "./components/Banner/Banner";

function App() {
  useEffect(() => {
    document.title = `Kasa`;
  });

  return (
    <div className="App">
      <Banner>
        <div className="banner">
          <img src={KasaLogo} alt="logo Kasa" className="kasa-logo" />
          <nav>
            <ul>
              <li className="accueil">
                <a href="Home.js">Accueil</a>
              </li>
              <li className="apropos">
                <a href="APropos.js">A propos</a>
              </li>
            </ul>
          </nav>
        </div>
      </Banner>
      <div>
        <Home></Home>
      </div>
      <div>
        <NoMatch></NoMatch>
      </div>
    </div>
  );
}
export default App;
