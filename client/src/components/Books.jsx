import axios from "axios";
import React, { useEffect, useState } from "react";
import { format } from "date-fns";
import "../App";
import { useNavigate } from "react-router-dom";
import Pagination from "./Pagination";

function Books() {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);

  const booksPerPage = 5;

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/books")
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [currentPage]);

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
  //revisit this part of code
  const indexOfLastBook = currentPage * booksPerPage;
  const indexOfFirstBook = indexOfLastBook - booksPerPage;
  const currentBooks = books.slice(indexOfFirstBook, indexOfLastBook);

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevPage = () => {
    setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div>
        <h1>Book List</h1>
        <ul>
          {currentBooks.map((book) => (
            <li className="book-div" key={book.id}>
              <h3>Book Title: {book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Description: {book.description}</p>
              <p>Category: {book.category}</p>
              {book.isactive ? <p>Active</p> : <p>NotActive</p>}
              <img src={book.cover_url} alt="Book Cover" />
              <div>
                <button
                  className="navigate_btn"
                  onClick={() => {
                    navigate(`/api/books/${book.id}`);
                  }}
                >
                  Info
                </button>
                <button
                  className="delete-btn"
                  onClick={(e) => {
                    deleteBtn(e, book.id);
                  }}
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        {books.length > 0 && ( // Check if there are books to display
          <Pagination
            next={currentPage * booksPerPage < books.length}
            previous={currentPage > 1}
            onNext={nextPage}
            onPrevious={prevPage}
          />
        )}
      </div>
    </>
  );
}

export default Books;
