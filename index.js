const express = require('express');
const bodyParser = require('body-parser');
const path = require('path')
const cors = require('cors');
const { queryRoutes } = require('./routes/queryRoutes');
const { authRoutes } = require('./routes/authRoutes');
const port = process.env.PORT || 9000;

const server = express()
server.use(express.json())

if (process.env.NODE_ENV == "production") {
  server.use(express.static(path.join(__dirname, "client/build")))
}



server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true, }))

queryRoutes(server);
authRoutes(server);

server.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"))
})
server.listen(port, () => {
  console.log(`Server started on ${port}.`)
})