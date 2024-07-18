import "./Search.css";
import note from "../../assets/images/note.svg";
import Card from "../../components/Cards/Card";
import CardDatas from "../../services/CardDatas";

function Search() {
  return (
    <div className="block-search">
      <h1>Je trouve mon résumé</h1>
      <label htmlFor="name" className="">
        Veuillez taper le nom de l&apos;artiste ainsi que le titre ( ex: Eminem
        - Lose Yourself ):
      </label>
      <input
        type="text"
        id="name"
        name="name"
        required
        minLength="4"
        maxLength="100"
        size="40"
      />
      <button type="button" className="note">
        <img src={note} width={32} height={32} alt="note " />
      </button>
      <p>Découvrez les recherches les plus populaires : </p>
      <div className="down-block-search">
        {CardDatas.map((data) => (
          <Card
            key={data.id}
            img={data.img}
            artist={data.artist}
            title={data.artist}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
