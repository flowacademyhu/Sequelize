module.exports = function (sequelize, DataTypes) {
  let userLanguage = sequelize.define('UserLanguage', {
    user_id: {
      type: DataTypes.INTEGER
    },
    language_id: {
      type: DataTypes.INTEGER
    },
    level: {
      type: DataTypes.STRING
    }
  });

  /* FOREIGN KEY ATTEMPT... FAILED
  userLanguage.associate = (models) => {
    userLanguage.belongsTo(models.language, {foreignKey: 'language_id'});
    userLanguage.belongsTo(models.user, {foreignKey: 'user_id'});
  };
  */

  return userLanguage;
};
