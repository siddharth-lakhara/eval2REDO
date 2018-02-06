const hapi = require('hapi');

const server = new hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

server.route({
  path: '/',
  method: 'GET',
  handler: (req, reply) => {
    reply('Hello there');
  },
});

server.start((err) => {
  if (err) { console.log(err); }
  console.log('server started');
});
