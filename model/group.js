module.exports = (sequelize, Datatype) => {
  var Group = sequelize.define('Group', {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: sequelize.STRING
    },
    is_public: {
      type: sequelize.INTEGER
    },
    description: {
      type: sequelize.STRING
    },
    date_created: {
      type: sequelize.INTEGER
    }
  });

  return Group;
};
