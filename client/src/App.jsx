import React, { useEffect, useState } from "react";
import { Route, NavLink, Routes, Form } from "react-router-dom";
import "./App.css";
import axios from "axios";
// import { Navbar } from "react-bootstrap";
import Home from "./components/Home";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";
import Pagination from "./components/Pagination";

import { format } from "date-fns";

function App() {
  return (
    <>
      <NavLink to={"/"}>Home</NavLink>

      <NavLink to={"/api/books"}>Books</NavLink>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/books" element={<Books />} />
        <Route path="/api/books/:id" element={<BookDetails />} />
      </Routes>

      <Home />
      <Form />
    </>
  );
}

export default App;
