// db.js
const { Sequelize } = require('sequelize');
require("dotenv").config()
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: 'localhost', // Change this to your MySQL server host if needed
  dialect: 'mysql',
});

module.exports = sequelize;
