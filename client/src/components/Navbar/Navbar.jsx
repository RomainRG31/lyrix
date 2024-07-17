import "./Navbar.css";
import "../../App.css";
import logo from "../../assets/images/logo.png";

function NavBar() {
  return (
    <div className="bg-navbar">
      <div className="left-block-navbar">
        <img src={logo} width={64} height={64} alt="" />
        <button className="sign-in favorites" type="button">
          Mes favoris
        </button>
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
