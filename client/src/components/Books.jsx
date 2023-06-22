import axios from "axios";
import React, { useEffect, useState } from "react";

import { format } from "date-fns";
import "../App";
import { useNavigate } from "react-router-dom";

function Books() {
  const navigate = useNavigate();
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

  function deleteBtn(e, id) {
    e.preventDefault();
    axios
      .delete(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }

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
      <div
        className="navigate_btn"
        onClick={() => {
          navigate(`/api/books/${book.id}`);
        }}
      >
        More Details
      </div>
      <div
        className="delete-btn"
        onClick={(e) => {
          deleteBtn(e, book.id);
        }}
      >
        Delete
      </div>
    </>
  );
}

export default Books;
