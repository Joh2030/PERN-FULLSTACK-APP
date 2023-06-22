import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagination from "./components/Pagination";
import { format } from "date-fns";
import "./App.css";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <div>
        <h1>Book List</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>Book Title: {book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Description: {book.description}</p>
              <p>Category: {book.category}</p>
              {/* <p>Published At: {format(new Date(book.publishedAt),'YYYY-MM-DD')}</p> */}
              {book.isactive ? <p>Active</p> : <p>NotActive</p>}
              <img src={book.cover_url} alt="Book Cover" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Books;
