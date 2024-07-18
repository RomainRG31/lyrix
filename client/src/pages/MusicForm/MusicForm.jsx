import "./MusicForm.css";

function MusicForm() {
  return (
    <div className="block-musicForm">
      <h1>Ajouter une musique :</h1>
      <form>
        <div>
          <label htmlFor="jacket">Jacket :</label>
          <input type="file" id="jacket" name="jacket" accept="image/*" />
        </div>
        <div>
          <label htmlFor="title">Title :</label>
          <input type="text" id="title" name="title" required />
        </div>
        <div>
          <label htmlFor="artist">Artist :</label>
          <input type="text" id="artist" name="artist" required />
        </div>
        <div>
          <button type="submit">Soumettre</button>
        </div>
      </form>
    </div>
  );
}

export default MusicForm;
