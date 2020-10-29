const { Pool, Client } = require('pg');
require('dotenv').config()
const connectionString = process.env.CONNECTION_STRING;
const pool = new Pool({
  connectionString: connectionString,
})
pool.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  pool.end()
})
const client = new Client({
  connectionString: connectionString,
})
client.connect()
client.query('SELECT NOW()', (err, res) => {
  console.log(err, res)
  client.end()
})