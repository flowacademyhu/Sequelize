
module.exports = (sequelize, Datatype) => {
  var Language = sequelize.define('Language', {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: sequelize.STRING
    }
  });

  return Language;
};
