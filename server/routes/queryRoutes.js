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


  // server.get('/queries', function (req, res) {
  //   pool.connect(process.env.CONNECTION_STRING, function (err, client, done) {
  //     if (err) {
  //       return console.error('error fetching client from pool', err)
  //     }
  //     client.query('select * from "Workers".handymen', function (err, result) {
  //       if (err) {
  //         return console.errror('error runnig query', err);
  //       }
  //       res.send(result.rows);
  //       done();
  //     })

  //   })

  // })
}

module.exports = { queryRoutes }