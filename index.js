const models = require('./models');
/*
Without sequelize-import:
- const postsModel = require('model'); pl. 'userlanguages'
- let posts = postsModel(sequelize);
- posts.findAll();
*/

/*
  models.user.findAll().then(users => {
  users.forEach(user => {
    console.log(user.name);
  });
});
*/

models.userLanguage.findAll().then(userlanguages => {
  userlanguages.forEach(userlanguage => {
    console.log(userlanguage.level);
  });
});

models.userLoginHistory.findAll().then(userloginhistories => {
  userloginhistories.forEach(userloginhistory => {
    console.log(userloginhistory.date);
  });
});

models.userPhoto.findAll().then(userphotos => {
  userphotos.forEach(userphoto => {
    console.log(userphoto.description);
  });
});
