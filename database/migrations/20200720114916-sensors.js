'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.createTable('sensors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      stationId: {
        allowNull: false,
        type: Sequelize.STRING,
        references: {
          model: 'stations',
          key: 'Id',
        }
      },
      temperature: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      pressure: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      humidity: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      precipitation: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      gustOfWind: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      windSpeed: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      windDirection: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      solarIncidence: {
        allowNull: true,
        defaultValue: null,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },

    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
