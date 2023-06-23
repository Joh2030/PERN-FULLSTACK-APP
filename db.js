const { Pool } = require("pg");
const dotenv = require("dotenv");

const connectionString = process.env.CONNECTING_STRING;

const pool = new Pool({
  connectionString,
});

module.exports = pool;
