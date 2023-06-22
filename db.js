const { Pool } = require("pg");

const connectionString = process.env.CONNECT_STRING;

const pool = new Pool({
  connectionString,
});

module.exports = pool;
