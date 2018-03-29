module.exports = function (sequelize, DataTypes) {
  let UserLoginHistories = sequelize.define('UserLoginHistory', {
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
  return UserLoginHistories;
};
