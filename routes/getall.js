
const getallHandler = require('../handlers/getallHandler');

module.exports = [{
  method: 'GET',
  path: '/getall',
  handler: (req, reply) => {
    getallHandler.then((combinedJSON) => {
      reply(combinedJSON);
    });
  },
}];
