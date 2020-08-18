const { Model, DataTypes } = require('sequelize');

class Log extends Model {
  static init(sequelize) {
    super.init({
      temperature: DataTypes.NUMBER,
      pressure: DataTypes.NUMBER,
      precipitation: DataTypes.NUMBER,
      humidity: DataTypes.NUMBER,
      gustofwind: DataTypes.NUMBER,
      windspeed: DataTypes.NUMBER,
      winddirection: DataTypes.STRING,
      solarincidence: DataTypes.STRING
    },{
      sequelize
    })
  }

  static associate(models) {
    this.belongsTo(models.Station, { foreignKey:  'station_id', as: 'station' });
  }
}

module.exports = Log;