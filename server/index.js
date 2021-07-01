require('dotenv').config();
const port = process.env.PORT || 5000;
const uuid = require('uuid');
const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server, {
  cors: {
    origin: '*',
    methods: ['GET', 'POST'],
  },
});

var connectedClients = {};

io.on('connection', (client) => {
  //Console.log
  const count = io.engine.clientsCount;
  console.log(`User connected \nThere are now ${count} users logged in`);

  //Message
  client.on('message', (message) => {
    console.log(message);
    client.broadcast.emit('message', message);
  });
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
