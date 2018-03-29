
module.exports = (sequelize, Datatype) => {
  var Workplaces = sequelize.define('Workplace', {
    name: {
      type: Datatype.STRING
    }
  });

  return Workplaces;
};
