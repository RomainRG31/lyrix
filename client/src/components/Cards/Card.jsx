import { useState } from "react";
import PropTypes from "prop-types";
import "./Card.css";
import basket from "../../assets/images/basket.png";
import pen from "../../assets/images/pen.png";

function Card({ id, img, artist, title, onUpdate, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedArtist, setEditedArtist] = useState(artist);
  const [editedTitle, setEditedTitle] = useState(title);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/music/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            jacket: img,
            artist: editedArtist,
            title: editedTitle,
          }),
        }
      );
      if (response.ok) {
        setIsEditing(false);
        onUpdate();
      }
    } catch (error) {
      console.error("Error updating music:", error);
    }
  };

  const handleDelete = async () => {
    if (id > 0) {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/music/${id}`,
          {
            method: "DELETE",
          }
        );
        if (response.ok) {
          onUpdate();
        }
      } catch (error) {
        console.error("Error deleting music:", error);
      }
    }
    onDelete(id);
  };

  return (
    <div className="block-card">
      <img src={img} width={256} height={256} alt="visual of artist" />
      {isEditing ? (
        <>
          <input
            value={editedArtist}
            onChange={(e) => setEditedArtist(e.target.value)}
          />
          <input
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
        </>
      ) : (
        <>
          <h3>{editedArtist}</h3>
          <p>{editedTitle}</p>
        </>
      )}
      <div className="block-pen-basket">
        {isEditing ? (
          <button type="button" onClick={handleSave}>
            Save
          </button>
        ) : (
          <button
            type="button"
            onClick={handleEditClick}
            onKeyDown={(e) => e.key === "Enter" && handleEditClick()}
          >
            <img src={pen} width={20} height={20} alt="Edit" />
          </button>
        )}
        <button
          type="button"
          onClick={handleDelete}
          onKeyDown={(e) => e.key === "Enter" && handleDelete()}
        >
          <img src={basket} width={20} height={20} alt="Delete" />
        </button>
      </div>
    </div>
  );
}

Card.propTypes = {
  id: PropTypes.number.isRequired,
  img: PropTypes.string.isRequired,
  artist: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  onUpdate: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default Card;
