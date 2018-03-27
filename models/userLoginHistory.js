module.exports = function (sequelize, DataTypes) {
  let userLoginHistory = sequelize.define('UserLoginHistory', {
    user_id: {
      type: DataTypes.INTEGER
    },
    device_id: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATE
    }
  });
  return userLoginHistory;
};
