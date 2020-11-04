const pool = require('../connection');
const bcrypt = require('bcrypt');
const { jwtGenerator } = require('../security/jwtGenerator');

require('dotenv').config();




const authRoutes = (server) => {
  //register
  server.post('/signup', async (req, res) => {
    const { username, email, password } = req.body;
    const saltRounds = 10;
    try {
      const salt = await bcrypt.genSalt(saltRounds)
      const hashedPassword = await bcrypt.hash(password, salt)
      const user = await pool.query(`SELECT * FROM "Authentication/Authorization".users WHERE email = $1`, [
        email
      ])
      if (user.rows.length !== 0) {
        return res.status(401).send("User already exist")
      }
      const newUser = await pool.query(`INSERT INTO  "Authentication/Authorization".users (username, email, password) values($1, $2, $3) RETURNING *`, [
        username, email, hashedPassword
      ])
      const token = jwtGenerator(newUser.rows[0].user_id)
      res.json({ token })

    } catch (e) {
      console.error(e.message)
      res.status(500).send("Server Error")
    }
  })
  //logIn

  server.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await pool.query(`SELECT * FROM "Authentication/Authorization".users WHERE email = $1`, [email])
      if (user.rows.length === 0) {
        return res.status(401).json("Password or email is incorrect")
      }
      const validPassword = await bcrypt.compare(password, user.rows[0].password);
      if (!validPassword) {
        return res.json("Password or email is incorrect")
      }
      const token = jwtGenerator(user.rows[0].user_id);
      res.json({ token });
    } catch (e) {
      console.error(e.message)
      res.send("Server Error")
    }
  })
}

module.exports = { authRoutes }