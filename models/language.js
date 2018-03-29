
module.exports = (sequelize, Datatype) => {
  var Language = sequelize.define('Language', {
    name: {
      type: Datatype.STRING
    }
  });

  return Language;
};
