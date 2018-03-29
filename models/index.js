// Estabilish connection
const Sequelize = require('sequelize');
const sImport = require('sequelize-import');
const sequelize = new Sequelize('facebook', 'root', 'toor', {
  host: '192.168.5.10',
  dialect: 'mysql',
  logging: false,
  define: {
    timestamps: false // true by default -> no need for createdAt and updatedAt columns in the table
  }
});

/*
Without sequelize-import:
- const postsModel = require('model'); pl. 'userlanguages'
- let posts = postsModel(sequelize);
- posts.findAll();
*/

// Test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const models = sImport(__dirname, sequelize, {
  exclude: ['index.js']
});

// megnézi az összes modell asszociációját
Object.keys(models).forEach(model => {
  if (model.associate) {
    model.associate();
  }
});
module.exports = models;
