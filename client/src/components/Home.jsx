import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
// import Form from "./Form";

export default function Home() {
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
    <div>
      <div className="home_title">
        <h1>Welcome to Home Library!</h1>
      </div>
      {/* <Form /> */}
    </div>
  );
}
