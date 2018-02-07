const updatedbHandler = require('../handlers/updatedbHandler');
const Models = require('../models');

module.exports = [{
  method: 'GET',
  path: '/updatedb',
  handler: (req, reply) => {
    updatedbHandler()
      .then((booksArray) => {
        booksArray.forEach((book) => {
          Models.books.create({
            books_id: book.id,
            name: book.name,
            author: book.author,
            rating: book.rating,
          })
            .then((result) => {});
        });
        reply({
          data: 'DB updated',
          statusCode: 200,
        });
      });
  },
}];
