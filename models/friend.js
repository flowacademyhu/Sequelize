module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    user_id: {
      // mul
      type: DataTypes.INTEGER
    },
    friend_id: {
      // mul
      type: DataTypes.INTEGER
    }
  });
  return Friend;
};
