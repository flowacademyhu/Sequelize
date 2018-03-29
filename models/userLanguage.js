module.exports = function (sequelize, DataTypes) {
  let UserLanguages = sequelize.define('UserLanguage', {
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

  UserLanguages.associate = (models) => {
    UserLanguages.belongsTo(models.language, {foreignKey: 'language_id'});
    UserLanguages.belongsTo(models.user, {foreignKey: 'user_id'});
  };

  return UserLanguages;
};
