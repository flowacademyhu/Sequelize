const express = require('express');
const app = express();
const facebook = require('./controllers/index');

// logger
const logger = (req, res, next) => {
  console.log(req.method, req.path);
  next();
};

app.use(logger);

Object.keys(facebook).forEach(key => {
  app.use('/facebook' + key, facebook[key].controller);
});

// LISTENER
app.listen(8081, () => {
  console.log('Listening on port 8081');
});

/*
models.user.findAll().then(users => {
  users.forEach(user => {
    models.post.findAll({where: {user_id: user.id}}).then(posts => {
      console.log(user.name);
      posts.forEach(post => {
        console.log('- ' + post.content);
      });
    });
  });
});
*/

/*
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
*/
/*
// FOREIGN KEY ATTEMPT... FAILED
models.userLanguage.findAll().then(userLanguages => {
  userLanguages.forEach(userLanguage => {
    userLanguage.getUser();
  });
});
*/
