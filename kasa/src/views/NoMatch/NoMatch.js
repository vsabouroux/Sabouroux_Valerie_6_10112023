import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./NoMatch.scss";
import { NavLink } from "react-router-dom";

function NoMatch() {
  return (
    <div>
      <Header />
      <div className="element-no-found">
        <div className="NoMatch">404</div>
        <div className="page-inconnue">
          {"  Oups ! La page que vous demandez n'existe pas. "}
        </div>
        <NavLink className="back-home" to="/Home">
          Retourner sur la page d'accueil
        </NavLink>
      </div>
      <Footer />
    </div>
  );
}
export default NoMatch;
