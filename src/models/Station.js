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

  static associate(models) {
    this.hasMany(models.Log, { foreignKey: 'station_id', as: 'log' });
  }
}

module.exports = Station;