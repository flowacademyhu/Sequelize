module.exports = function (sequelize, DataTypes) {
  let school = sequelize.define('School', {
    name: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    }
  });
  return school;
};
