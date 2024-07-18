import "./Navbar.css";
import "../../App.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

function NavBar() {
  return (
    <div className="bg-navbar">
      <div className="left-block-navbar">
        <Link to="/">
          <img src={logo} width={64} height={64} alt="" />
        </Link>
        <Link to="/music-form">
          <button className="sign-in favorites" type="button">
            Ajouter une musique
          </button>
        </Link>
      </div>
      <div className="block-navbar-btn">
        <button className="sign-in favorites" type="button">
          Se connecter
        </button>
        <button className="register get-started" type="button">
          S'inscrire
        </button>
      </div>
    </div>
  );
}

export default NavBar;
