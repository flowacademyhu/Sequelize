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

const models = sImport(__dirname + '/models', sequelize, {
});

/*
Without sequelize-import:
- const postsModel = require('model'); pl. 'userlanguages'
- let posts = postsModel(sequelize);
- posts.findAll();
*/

console.log(sequelize);

// test connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

/*
  models.user.findAll().then(users => {
  users.forEach(user => {
    console.log(user.name);
  });
});
*/

models.userlanguage.findAll().then(userlanguages => {
  userlanguages.forEach(userlanguage => {
    console.log(userlanguage.level);
  });
});

models.userloginhistory.findAll().then(userloginhistories => {
  userloginhistories.forEach(userloginhistory => {
    console.log(userloginhistory.date);
  });
});

models.userphoto.findAll().then(userphotos => {
  userphotos.forEach(userphoto => {
    console.log(userphoto.description);
  });
});
