const { Sequelize } = require('sequelize');

const dbConfig = require('../config/database');
const Student = require('../models/Student');
const Subject = require('../models/Subject');

const connection = new Sequelize(dbConfig);

Student.init(connection);
Subject.init(connection);

Student.associate(connection.models);
Subject.associate(connection.models);


module.exports = connection;