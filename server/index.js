require('dotenv').config();
const port = process.env.PORT || 5000;
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
  console.log('user conected');
  const count = io.engine.clientsCount;
  console.log(`there are now ${count} users logged in`);
});

server.listen(port, () => {
  console.log(`listening on port ${port}`);
});
