const userHandler = require('../handlers/usersHandler');

module.exports = [{
  method: 'GET',
  path: '/user',
  handler: (req, reply) => {
    reply('Working');
  },
}];
