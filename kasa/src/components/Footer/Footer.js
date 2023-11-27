import KasaLogoB from "../../assets/KasaLogoB.png";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="kasa-footer">
      <div className="bandeau">
        <img src={KasaLogoB} alt="logo Kasa" className="kasa-logo-blanc" />
        <p>© 2020 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}

export default Footer;
