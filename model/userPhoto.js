module.exports = function (sequelize, DataTypes) {
  let userPhoto = sequelize.define('UserPhoto', {
    user_id: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    }
  });
  return userPhoto;
};
