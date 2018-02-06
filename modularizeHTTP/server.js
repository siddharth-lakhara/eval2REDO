const hapi = require('hapi');
const caller = require('./func');

const server = new hapi.Server();
server.connection({
  host: 'localhost',
  port: 8080,
});

server.route({
  path: '/book',
  method: 'GET',
  handler: (req, reply) => {
    caller('https://5gj1qvkc5h.execute-api.us-east-1.amazonaws.com/dev/allBooks')
      .then((dataString) => {
        reply(dataString);
      });
  },
});

server.start((err) => {
  if (err) { console.log(err); }
  console.log('server started');
});
