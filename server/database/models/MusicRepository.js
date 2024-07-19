const AbstractRepository = require("./AbstractRepository");

class MusicRepository extends AbstractRepository {
  constructor() {
    super({ table: "music" });
  }

  async create(music) {
    const [result] = await this.database.query(
      `insert into ${this.table} (jacket, title, artist) values (?, ?, ?)`,
      [music.jacket, music.title, music.artist]
    );

    return result.insertId;
  }

  async readAll() {
    const [rows] = await this.database.query(`select * from ${this.table}`);
    return rows;
  }

  async update(id, music) {
    await this.database.query(
      `update ${this.table} set jacket = ?, title = ?, artist = ? where id = ?`,
      [music.jacket, music.title, music.artist, id]
    );
  }

  async delete(id) {
    await this.database.query(`delete from ${this.table} where id = ?`, [id]);
  }
}

module.exports = MusicRepository;
