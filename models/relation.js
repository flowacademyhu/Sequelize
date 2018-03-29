module.exports = (sequelize, Datatype) => {
  var Relations = sequelize.define('Relation', {
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
