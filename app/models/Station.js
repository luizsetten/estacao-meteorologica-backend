'use strict';

module.exports = (sequelize, DataTypes) => {
  const Station = sequelize.define('User', {
    name: DataTypes.STRING,
    token: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  })
  return Station;
};