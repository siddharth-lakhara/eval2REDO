const books = require('./books');
const main = require('./main');
const ratings = require('./ratings');

module.exports = [].concat(main, books, ratings);
