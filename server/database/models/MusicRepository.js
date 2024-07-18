const AbstractRepository = require("./AbstractRepository");

class MusicRepository extends AbstractRepository {
  constructor() {
    super({ table: "music" });
  }

  async create(music) {
    // Execute the SQL INSERT query to add a new music to the "music" table
    const [result] = await this.database.query(
      `insert into ${this.table} (jacket, title, artist) values (?, ?, ?)`,
      [music.jacket, music.title, music.artist]
    );

    return result.insertId;
  }

  //   async readByEmail(email) {
  //     const [rows] = await this.database.query(
  //       `select * from ${this.table} where email = ?`,
  //       [email]
  //     );

  //     return rows[0];
  //   }
}

module.exports = MusicRepository;
