import "./Card.css";
import PropTypes from "prop-types";
import heart from "../../assets/images/heart-fill.png";

function Card({ img, artist, title }) {
  return (
    <div className="block-card">
      <img src={img} width={256} height={256} alt="visual of artist" />
      <h3>{artist}</h3>
      <p>{title}</p>
      <img
        src={heart}
        width={16}
        height={16}
        className="heart-fill"
        alt="heart"
      />
    </div>
  );
}

export default Card;

Card.propTypes = {
  img: PropTypes.string,
  artist: PropTypes.string,
  title: PropTypes.string,
};

Card.defaultProps = {
  img: "",
  artist: "",
  title: "",
};
