module.exports = function (sequelize, DataTypes) {
  let Religions = sequelize.define('Religion', {
    name: {
      type: DataTypes.STRING
    }
  });
  return Religions;
};
