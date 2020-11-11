const pool = require('../connection');




const queryRoutes = (server) => {
  server.get('/queries', async (req, res) => {
    const { sql } = req.query;
    try {
      const newPool = await pool;
      const results = await newPool.query(`${sql}`);
      res.send(results.rows);
      res.sendStatus(200);
      res.json({ results })
    } catch (e) {
      console.log(e.message)
      res.sendStatus(500)
    }
  })
}

module.exports = { queryRoutes }