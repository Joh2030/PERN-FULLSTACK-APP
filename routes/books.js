const express = require("express");
const pool = require("../db");
const {
  getBooks,
  getBook,
  createBook,
  updateBook,
  deleteBook,
} = require("../controllers/books");

const booksRouter = express.Router();

booksRouter.get("/", getBooks);

booksRouter.get("/:id", getBook);

booksRouter.post("/", createBook);

booksRouter.put("/", updateBook);

booksRouter.delete("/:id", deleteBook);

module.exports = booksRouter;
