'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('logs', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
      },
      station_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: `stations`, key: `id` },
        onDelete: 'CASCADE',
      },
      temperature: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      pressure: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      precipitation: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      humidity: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      gustofwind: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      windspeed: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      winddirection: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      solarincidence: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('logs');
  }
};
