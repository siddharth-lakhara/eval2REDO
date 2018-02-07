const books = require('./books');
const main = require('./main');
const ratings = require('./ratings');
const getall = require('./getall');
const updatedb = require('./updatedb');

module.exports = [].concat(main, books, ratings, getall, updatedb);
