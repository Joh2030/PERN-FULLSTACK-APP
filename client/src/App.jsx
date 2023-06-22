import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Navbar from "./components/navbar";
import Pagination from "./components/Pagination";
import { format } from "date-fns";

function App() {
  const [books, setBooks] = useState([]);
  //const url = `process.env.REACT_APP_BOOK_API_URL`;
  const url = "http://localhost:3000/api/books";
  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setBooks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      {/* <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/books">Books</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" component={Home} />
          <Route path="/books" component={BooksList} />
          <Route path="/books/:id" component={BookDetails} />
        </div>
      </Router> */}
      <div>
        <h1>Book List</h1>
        <ul>
          {books.map((book) => (
            <li key={book.id}>
              <h3>Book Title: {book.title}</h3>
              <p>Author: {book.author}</p>
              <p>Description: {book.description}</p>
              <p>Category: {book.category}</p>
              {/* <p>
                Published At: {format(new Date(book.publishedAt), "YYYY-MM-DD")}
              </p> */}
              {book.isactive ? <p>Active</p> : <p>NotActive</p>}
              <img src={book.cover_url} alt="Book Cover" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
