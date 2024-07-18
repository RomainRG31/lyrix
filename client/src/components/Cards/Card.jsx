import "./Card.css";
import PropTypes from "prop-types";

function Card({ img, artist, title }) {
  return (
    <div className="block-card">
      <img src={img} width={256} height={256} alt="visual of artist" />
      <h3>{artist}</h3>
      <p>{title}</p>
    </div>
  );
}

Card.propTypes = {
  img: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Card;
