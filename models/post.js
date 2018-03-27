const Sequelize = require('sequelize');

module.exports = (sequelize) => {
  var Post = sequelize.define('Posts', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: Sequelize.INTEGER
    },
    content: {
      type: Sequelize.STRING
    },
    entity_id: {
      type: Sequelize.INTEGER
    },
    entity_type: {
      type: Sequelize.ENUM('video', 'picture', 'poll', 'location')
    },
    visibility: {
      type: Sequelize.ENUM('public', 'friends_only', 'only_me', 'only_group')
    }

  });

  return Post;
};

/*
Posts.findAll().then(Posts => { // a then az egy promise
  Posts.forEach(Posts => {
    console.log(Posts.id, Posts.user_id, Posts.content, Posts.entity_id, Posts.entity_type, Posts.visibility);
  });
}); */
