const Sequelize = require('sequelize');

const dbConfig = require('../config/database');

const Station = require('../models/Station');
const Log = require('../models/Log');

const connection = new Sequelize(dbConfig);

Station.init(connection);
Log.init(connection);

Log.associate(connection.models);
Station.associate(connection.models);

module.exports = connection;