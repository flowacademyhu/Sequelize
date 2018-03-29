
module.exports = (sequelize, Datatype) => {
  var Workplaces = sequelize.define('Workplaces', {
    name: {
      type: Datatype.STRING
    }
  });

  return Workplaces;
};