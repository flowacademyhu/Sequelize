module.exports = (sequelize, Datatype) => {
  var Relations = sequelize.define('Relations', {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true
    },
    type: {
      type: Datatype.STRING
    }

  });
  return Relations;
};
