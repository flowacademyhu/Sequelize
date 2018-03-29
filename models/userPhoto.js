module.exports = function (sequelize, DataTypes) {
  let UserPhotos = sequelize.define('UserPhoto', {
    user_id: {
      type: DataTypes.INTEGER
    },
    description: {
      type: DataTypes.STRING
    }
  });
  return UserPhotos;
};
