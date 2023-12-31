const pool = require("../db");

const getBooks = async (req, res) => {
  try {
    const limit = req.query.limit || 30;
    const skip = req.query.skip || 0;
    const query = `SELECT * FROM books LIMIT $1 OFFSET $2`;
    const values = [limit, skip];
    const { rows } = await pool.query(query, values);
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error cannot display result");
  }
};

const getBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM books WHERE id=$1;", [id]);
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error cannot display result");
  }
};

const createBook = async (req, res) => {
  try {
    const {
      title,
      author,
      description,
      category,
      cover_url,
      publishedat,
      isactive,
    } = req.body;
    const { rows } = await pool.query(
      "INSERT INTO books (title, author, description, category, cover_url, publishedat, isactive) VALUES ($1, $2, $3, $4, $5, $6, $7) RETURNING *;",
      [title, author, description, category, cover_url, publishedat, isactive]
    );
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error cannot display result");
  }
};

const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const {
      title,
      author,
      description,
      category,
      cover_url,
      publishedat,
      isactive,
    } = req.body;
    const { rows } = await pool.query(
      "UPDATE books SET title=$2, author=$3, description=$4, category=$5, cover_url=$6, publishedat=$7, isactive=$8 WHERE id=$1 RETURNING *;",
      [
        id,
        title,
        author,
        description,
        category,
        cover_url,
        publishedat,
        isactive,
      ]
    );
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error cannot display result");
  }
};

const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("DELETE FROM books WHERE id=$1;", [id]);
    res.json(rows);
  } catch (error) {
    console.log(error.message);
    res.status(500).send("Error cannot display result");
  }
};

module.exports = {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
};
