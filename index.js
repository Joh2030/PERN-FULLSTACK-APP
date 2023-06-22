require("dotenv/config");
const express = require("express");
const cors = require("cors");
const booksRouter = require("./routes/books");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("You can do this! ");
});

app.use("/api/books", booksRouter);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
