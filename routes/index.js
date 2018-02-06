const books = require('./books');
const main = require('./main');
const ratings = require('./ratings');
const getall = require('./getall');

module.exports = [].concat(main, books, ratings, getall);
