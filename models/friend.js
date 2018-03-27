module.exports = (sequelize, DataTypes) => {
  const Friend = sequelize.define('Friend', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
