module.exports = (sequelize, DataTypes) => {
  const Device = sequelize.define('Device', {
    type: {
      type: DataTypes.STRING
    }
  });
  return Device;
};
