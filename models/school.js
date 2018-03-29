module.exports = function (sequelize, DataTypes) {
  let Schools = sequelize.define('School', {
    name: {
      type: DataTypes.STRING
    },
    location: {
      type: DataTypes.STRING
    }
  });
  return Schools;
};
