module.exports = function (sequelize, DataTypes) {
  let religion = sequelize.define('Religion', {
    name: {
      type: DataTypes.STRING
    }
  });
  return religion;
};
