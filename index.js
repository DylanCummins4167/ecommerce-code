require('dotenv').config(); // Load environment variables from .env file
const express = require('express');

// index.js
const sequelize = require('./db');
const app = require('./app');

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connection has been established successfully.');
    await sequelize.sync();
    console.log('Sequelize models synced to the database.');
    app.listen(3000, () => console.log('Server started on http://localhost:3000'));
  } catch (err) {
    console.error('Unable to connect to the database:', err);
  }
})();
