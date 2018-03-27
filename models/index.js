// set connection
const Sequelize = require('sequelize');
const sImport = require('sequelize-import');
const sequelize = new Sequelize('facebook', 'root', 'toor', {
  host: '192.168.5.10',
  dialect: 'mysql',
  define: {
    timestamps: false // true by default -> no need for createdAt and updatedAt columns in the table
  }
});

// test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sImport(__dirname, sequelize, {exclude: ['index.js']});
