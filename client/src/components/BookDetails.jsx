import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function BookDetails() {
  const { id } = useParams();

  const [book, setBook] = useState([]);
  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        setBook(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <>
      <ul>
        {book && (
          <li>
            <h2>{book.title}</h2>
            <p>Author: {book.author}</p>
            <p>Category: {book.category}</p>
            <p>Published At: {book.publishedat}</p>
            <img src={book.cover_url} alt="" />
            <p>{book.description}</p>
          </li>
        )}
      </ul>
    </>
  );
}
