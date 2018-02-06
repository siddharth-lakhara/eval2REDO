'use strict';
module.exports = (sequelize, DataTypes) => {
  var books = sequelize.define('books', {
    author: DataTypes.STRING,
    books_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    rating: DataTypes.FLOAT
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return books;
};