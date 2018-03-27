module.exports = (sequelize, Datatype) => {
  var Group = sequelize.define('Group', {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
