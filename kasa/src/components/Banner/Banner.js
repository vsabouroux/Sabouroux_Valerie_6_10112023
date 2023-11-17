//import Logo Kasa from
import "./Banner.scss";
function Banner({ img, texte }) {
  return (
    <div className="Header">
      <img src={img} alt="Côte escarpée, falaises abruptes" />
      <h1>{texte}</h1>
    </div>
  );
}
export default Banner;
