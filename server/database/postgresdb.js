const { Pool } = require("pg");

const myURI =
  "postgres://gagymfof:O0Eqn0SVUdPSJvdZqdF8945C0S_l0VVY@lallah.db.elephantsql.com:5432/gagymfof";

const URI = process.env.PG_URI || myURI;

const pool = new Pool({
  connectionString: myURI,
});

module.exports = {
  // to insert queries and sql parameters to database
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  },
};
