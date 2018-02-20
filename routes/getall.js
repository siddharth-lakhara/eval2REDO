
const getallHandler = require('../handlers/getallHandler');

const groupByAuthor = (combinedJSON) => {
  const sortedObject = [];
  combinedJSON.map((element) => {
    console.log();
  });
  return sortedObject;
};

module.exports = [{
  method: 'GET',
  path: '/getall',
  handler: (req, reply) => {
    getallHandler.then((combinedJSON) => {
      // console.log(combinedJSON);
      // const sortedJSON = groupByAuthor(combinedJSON);
      reply(combinedJSON);
    });
  },
}];
