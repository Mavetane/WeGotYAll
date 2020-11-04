const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { queryRoutes } = require('./routes/queryRoutes');
const { authRoutes } = require('./routes/authRoutes');
const port = 9000;

const server = express()
server.use(express.json())
server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true, }))

queryRoutes(server);
authRoutes(server);


server.listen(port, () => {
  console.log(`Server started on ${port}.`)
})