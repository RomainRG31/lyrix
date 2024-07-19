import "./Home.css";
import { Link } from "react-router-dom";
import deezer from "../../assets/images/deezer.svg";
import spotify from "../../assets/images/spotify.svg";
import itunes from "../../assets/images/itunes.svg";
import helmet from "../../assets/images/helmet.svg";

function Home() {
  return (
    <div className="block-home">
      <div className="up-block-home">
        <h1>
          Découvrez et partagez la musique,
          <br />
          <span className="green-sentence">
            votre bibliothèque musicale collaborative
          </span>
        </h1>
        <p>
          Avec notre bibliothèque musicale collaborative, chaque utilisateur
          peut ajouter et découvrir de nouvelles chansons. Profitez de résumés
          intelligents et captivants pour explorer l'essence de chaque morceau
          partagé par notre communauté.
        </p>

        <Link className="register get-started" to="/search">
          Commencer maintenant
        </Link>
        <div className="down-block-home">
          <h2>Nos sponsors</h2>
          <div className="block-sponsors-logo">
            <div className="deezer spotify itunes">
              <img src={deezer} width={128} height={128} alt="deezer logo" />
              <p>Deezer</p>
            </div>
            <div className="deezer spotify itunes">
              <img src={spotify} width={128} height={128} alt="spotify logo" />
              <p>spotify</p>
            </div>
            <div className="deezer spotify itunes">
              <img src={itunes} width={128} height={128} alt="itunes logo" />
              <p>itunes</p>
            </div>
          </div>
        </div>
        <img
          src={helmet}
          className="helmet"
          width={320}
          height={320}
          alt="helmet"
        />
      </div>
    </div>
  );
}

export default Home;
