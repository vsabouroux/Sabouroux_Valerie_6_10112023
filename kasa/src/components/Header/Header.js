import KasaLogo from "../../assets/KasaLogo.png";
import "./Header.scss";

function Header() {
  return (
    <header className="kasa-banner banner">
      <img src={KasaLogo} alt="logo Kasa" className="kasa-logo" />
      <nav>
        <ul>
          <li className="accueil">
            {/* Link router (NavLink pour pouvoir faire la barre en dessous) */}
            <a href="Home.js">Accueil</a>
          </li>
          <li className="apropos">
            <a href="APropos.js">A propos</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
