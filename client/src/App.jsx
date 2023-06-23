import {
  BrowserRouter as Router,
  NavLink,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Books from "./components/Books";
import BookDetails from "./components/BookDetails";

function App() {
  return (
    <>
      <div>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/books">Books</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/books" element={<Books />} />
        <Route path="/books/:id" element={<BookDetails />} />
      </Routes>
    </>
  );
}

export default App;
