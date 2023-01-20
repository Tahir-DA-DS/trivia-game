const express = require("express");
const http = require ("http");
const path = require("path");
const socketio = require("socket.io")
const app = express();


const publicDirectoryPath = path.join(__dirname, '../public');
app.use(express.static(publicDirectoryPath));

const port = process.env.PORT || 8080;
const server = http.createServer(app);
const io = socketio(server);

io.on('connection', () => { // listen for new connections to Socket.IO
  console.log('A new player just connected');
  })
server.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});

const formatMessage = require("./utils/formatMessage.js");

const {
  addPlayer,
  getAllPlayers,
  getPlayer,
  removePlayer,
} = require("./utils/players.js");