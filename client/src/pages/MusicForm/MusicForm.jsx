import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./MusicForm.css";

function MusicForm() {
  const [formData, setFormData] = useState({
    jacket: "",
    title: "",
    artist: "",
  });

  const handleChange = (e) => {
    if (e.target.name === "jacket") {
      const file = e.target.files[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData({ ...formData, jacket: reader.result });
      };
      if (file) {
        reader.readAsDataURL(file);
      }
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/music`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        setFormData({ jacket: "", title: "", artist: "" });
        navigate("/search", { state: { showToast: true } });
      }
    } catch (error) {
      console.error("Erreur lors de l'ajout de la musique:", error);
    }
  };

  return (
    <div className="block-musicForm">
      <h1>Ajouter une musique :</h1>
      <form onSubmit={handleSubmit}>
        <div className="block-jacket">
          <label htmlFor="jacket">Pochette album :</label>
          <input
            type="file"
            id="jacket"
            name="jacket"
            accept="image/*"
            onChange={handleChange}
            required
          />
        </div>
        <div className="block-title">
          <label htmlFor="title">Artiste :</label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="block-artist">
          <label htmlFor="artist">Titre :</label>
          <input
            type="text"
            id="artist"
            name="artist"
            value={formData.artist}
            onChange={handleChange}
            required
          />
        </div>
        <div className="block-submit">
          <button type="submit">Soumettre</button>
        </div>
      </form>
      <ToastContainer />
    </div>
  );
}

export default MusicForm;
