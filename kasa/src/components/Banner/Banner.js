import "./Banner.scss";

function Banner({ img, texte }) {
  return (
    <div className="Banner">
      <img src={img} alt="Côte escarpée, falaises abruptes" />
      <div className="overlay">
        <h1>{texte}</h1>
      </div>
    </div>
  );
}
export default Banner;
