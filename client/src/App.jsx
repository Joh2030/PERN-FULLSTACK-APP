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
        <nav class="navbar bg-body-tertiary">
          <div class="container-fluid">
            {/* <a class="navbar-brand">Navbar</a> */}
            <NavLink class="link-opacity-10 navbar-brand" to="/">
              <i class="bi bi-house-fill"></i>
              Home
            </NavLink>
            <NavLink class="link-opacity-10 navbar-brand" to="/books">
              Books
            </NavLink>
            <form class="d-flex" role="search">
              <input
                class="form-control me-4"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </nav>
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
