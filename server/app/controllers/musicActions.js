const tables = require("../../database/tables");

const browse = async (req, res, next) => {
  try {
    const music = await tables.music.readAll();
    res.json(music);
  } catch (err) {
    next(err);
  }
};

const read = async (req, res, next) => {
  try {
    const music = await tables.music.read(req.params.id);
    if (music == null) {
      res.sendStatus(404);
    } else {
      res.json(music);
    }
  } catch (err) {
    next(err);
  }
};

const add = async (req, res, next) => {
  const music = req.body;

  try {
    const insertId = await tables.music.create(music);
    res.status(201).json({ insertId });
  } catch (err) {
    next(err);
  }
};

const update = async (req, res, next) => {
  const { id } = req.params;
  const music = req.body;

  try {
    await tables.music.update(id, music);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

const remove = async (req, res, next) => {
  const { id } = req.params;

  try {
    await tables.music.delete(id);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = {
  browse,
  read,
  add,
  update,
  remove,
};
