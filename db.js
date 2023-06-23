const { Pool } = require("pg");
const dotenv = require("dotenv");

const connectionString = process.env.pgURL;

const pool = new Pool({
  connectionString,
});

module.exports = pool;
