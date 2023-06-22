import React from "react";

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
        <h1>Welcome to the Library App!</h1>
      </div>
    </div>
  );
}
