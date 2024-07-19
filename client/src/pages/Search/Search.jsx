import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "./Search.css";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Card from "../../components/Cards/Card";
import CardDatas from "../../services/CardDatas";

function Search() {
  const [music, setMusics] = useState([]);
  const [hardCodedCards, setHardCodedCards] = useState(CardDatas);
  const location = useLocation();

  useEffect(() => {
    if (location.state?.showToast) {
      toast.success("Musique ajoutée avec succès !", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: true,
        style: {
          background:
            "linear-gradient(180deg, #a2e6c9 0%, #7befbe 44%, #27f7a0 100%)",
          color: "black",
          marginTop: "50px",
        },
      });
    }
  }, [location]);

  const fetchMusics = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/music`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.ok) {
        const data = await response.json();
        setMusics(data);
      }
    } catch (error) {
      console.error("Erreur lors de la récupération des musiques:", error);
    }
  };

  useEffect(() => {
    fetchMusics();
  }, []);

  const handleDelete = (id) => {
    setHardCodedCards(hardCodedCards.filter((card) => card.id !== id));
  };

  return (
    <div className="block-search">
      <p>Découvrez les chansons les plus populaires de la communauté : </p>
      <div className="down-block-search">
        {hardCodedCards.map((data) => (
          <Card
            key={data.id}
            id={data.id}
            img={data.img}
            artist={data.artist}
            title={data.title}
            onUpdate={fetchMusics}
            onDelete={handleDelete}
          />
        ))}
        {music.map((e) => (
          <Card
            key={e.id}
            id={e.id}
            img={e.jacket}
            artist={e.artist}
            title={e.title}
            onUpdate={fetchMusics}
            onDelete={() => {}}
          />
        ))}
      </div>
      <ToastContainer />
    </div>
  );
}

export default Search;
