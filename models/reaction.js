module.exports = (sequelize, Datatype) => {
  var Reactions = sequelize.define('Reaction', {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true
    },
    user_id: {
      type: Datatype.INTEGER
    },
    post_id: {
      type: Datatype.INTEGER
    },
    type: {
      type: Datatype.STRING
    }

  });
  return Reactions;
};
