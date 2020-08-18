const { Model, DataTypes } = require('sequelize');

class Station extends Model {
  static init(sequelize){
    super.init({
      name: DataTypes.STRING,
      latitude: DataTypes.STRING,
      longitude: DataTypes.STRING,
      city: DataTypes.STRING,
      uf: DataTypes.STRING,
      token: DataTypes.STRING,
    }, {sequelize});
  }
}

module.exports = Station;