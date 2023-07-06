const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
require('dotenv').config();

if (!process.env.SOCKET_PORT) {
  process.exit(1);
}

const cors = require('cors');
const app = express();
app.use(cors());
const server = http.createServer(app);
const io = socketIO(server);
const port = process.env.SOCKET_PORT;

io.on('connection', (socket) => {
  console.log('A user connected');

  socket.on('init', (message) => {
    console.log(message);
  })

  socket.on('chat_message', (message) => {
    console.log('message =>', message);
    io.emit('chat_message', message);
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

server.listen(port, () => {
  console.log('Server running on port ' + port);
});
