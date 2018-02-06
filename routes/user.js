const mainHandler = require('../handlers/mainHandler');

module.exports = [{
  method: 'GET',
  path: '/',
  handler: (req, reply) => {
    reply('Working');
  },
}];
