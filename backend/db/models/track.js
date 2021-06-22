'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    userId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    title: DataTypes.STRING
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
  };
  return Track;
};
