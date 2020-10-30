const { Pool } = require('pg');
require('dotenv').config()


const databaseConfig = { connectionString: process.env.CONNECTION_STRING };
const pool = new Pool(databaseConfig);

module.exports = pool;