module.exports = (sequelize, Datatype) => {
  var Group = sequelize.define('Group', {
    name: {
      type: Datatype.STRING
    },
    is_public: {
      type: Datatype.INTEGER
    },
    description: {
      type: Datatype.STRING
    },
    date_created: {
      type: Datatype.INTEGER
    }
  });

  return Group;
};
