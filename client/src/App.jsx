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
        <NavLink to="/api/books">Books</NavLink>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/api/books" element={<Books />} />
        <Route path="/api/books/:id" element={<BookDetails />} />
      </Routes>

      <div>
        <h1>Welcome to the Home Library App</h1>
      </div>
    </>
  );
}

export default App;
