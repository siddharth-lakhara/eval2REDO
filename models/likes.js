'use strict';
module.exports = (sequelize, DataTypes) => {
  var likes = sequelize.define('likes', {
    bookid: DataTypes.INTEGER,
    like: DataTypes.INTEGER,
    dislike: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return likes;
};