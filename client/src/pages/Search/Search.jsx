// import { useState } from "react";
import "./Search.css";
// import note from "../../assets/images/note.svg";
import Card from "../../components/Cards/Card";
import CardDatas from "../../services/CardDatas";

function Search() {
  // const [songName, setSongName] = useState("");
  // const [summary, setSummary] = useState("");

  // const handleInputChange = (event) => {
  //   setSongName(event.target.value);
  // };

  // const handleSearch = async () => {
  //   try {
  //     const response = await fetch("https://api.openai.com/v1/completions", {
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
  //       },
  //       body: JSON.stringify({
  //         model: "gpt-3.5-turbo",
  //         prompt: `Donne un résumé en français de la chanson ${songName}.`,
  //         max_tokens: 150,
  //         n: 1,
  //         stop: null,
  //         temperature: 0.7,
  //       }),
  //     });

  //     if (!response.ok) {
  //       throw new Error(`HTTP error! status: ${response.status}`);
  //     }

  //     const data = await response.json();
  //     if (data.choices && data.choices.length > 0) {
  //       const summaryText = data.choices[0].text.trim();
  //       setSummary(summaryText);
  //     } else {
  //       setSummary(
  //         "Désolé, nous n'avons pas pu obtenir un résumé pour cette chanson."
  //       );
  //     }
  //   } catch (error) {
  //     console.error("Error fetching summary:", error);
  //     setSummary(
  //       "Désolé, nous n'avons pas pu obtenir un résumé pour cette chanson."
  //     );
  //   }
  // };

  return (
    <div className="block-search">
      {/* <h1>Je trouve mon résumé</h1>
      <label htmlFor="name">
        Veuillez taper le nom de l&apos;artiste ainsi que le titre ( ex: Eminem
        - Lose Yourself ):
      </label>
      <input
        type="text"
        id="name"
        name="name"
        value={songName}
        onChange={handleInputChange}
        required
        minLength="4"
        maxLength="100"
        size="40"
      />
      <button type="button" className="note" onClick={handleSearch}>
        <img src={note} width={32} height={32} alt="note" />
      </button>
      {summary && <p className="summary">{summary}</p>} */}
      <p>Découvrez les chansons les plus populaires de la communauté : </p>
      <div className="down-block-search">
        {CardDatas.map((data) => (
          <Card
            key={data.id}
            img={data.img}
            artist={data.artist}
            title={data.title}
          />
        ))}
      </div>
    </div>
  );
}

export default Search;
