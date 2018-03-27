module.exports = (sequelize, Datatype) => {
  var Post = sequelize.define('Posts', {
    user_id: {
      type: Datatype.INTEGER
    },
    content: {
      type: Datatype.STRING
    },
    entity_id: {
      type: Datatype.INTEGER
    },
    entity_type: {
      type: Datatype.ENUM('video', 'picture', 'poll', 'location')
    },
    visibility: {
      type: Datatype.ENUM('public', 'friends_only', 'only_me', 'only_group')
    }

  });

  return Post;
};
