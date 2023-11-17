import KasaLogo from "../../assets/KasaLogo.png";
import "./Header.scss";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="kasa-header">
      <img src={KasaLogo} alt="logo Kasa" className="kasa-logo" />
      <nav id="sidebar">
        <ul>
          <li className="accueil">
            <NavLink
              to="/Home"
              exact
              activeClassName="active"
              className="nav-link"
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/APropos"
              exact
              activeClassName="active"
              className="nav-link"
            >
              A propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
