const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { queryRoutes } = require('./routes/queryRoutes')
const port = 9000;
const pool = require('./connection')

const server = express()

server.use(cors())
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true, }))

queryRoutes(server);

pool.on('connect', () => {
  console.log('connected to the db');
});

server.listen(port, () => {
  console.log(`Server started on ${port}.`)
})