const pool = require('../connection');
require('dotenv').config()



const queryRoutes = (server) => {
  server.get('/queries', async (req, res) => {
    const { sql } = req.query;
    try {
      const newPool = await pool;
      const results = await newPool.query(`${sql}`);
      console.log("results", results);
      res.send(results.rows);
      res.sendStatus(200)
    } catch (e) {
      console.log(e.message)
      res.sendStatus(500)
    }
  })
}

module.exports = { queryRoutes }