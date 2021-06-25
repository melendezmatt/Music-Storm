'use strict';
module.exports = (sequelize, DataTypes) => {
  const Track = sequelize.define('Track', {
    userId: DataTypes.INTEGER,
    url: DataTypes.STRING,
    title: DataTypes.STRING,
    albumTitle: DataTypes.STRING,
    albumImageUrl: DataTypes.STRING,
  }, {});
  Track.associate = function(models) {
    // associations can be defined here
    Track.belongsTo(models.User, {foreignKey: 'userId'}),
    Track.hasMany(models.Comment, {foreignKey: 'trackId', onDelete: 'CASCADE', hooks: true})
  };
  return Track;
};
