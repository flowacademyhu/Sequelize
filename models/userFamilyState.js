module.exports = function (sequelize, DataTypes) {
  let UserFamilyStates = sequelize.define('UserFamilyState', {
    relation_id: {
      type: DataTypes.INTEGER
    },
    user_id: {
      type: DataTypes.INTEGER
    },
    partner_id: {
      type: DataTypes.INTEGER
    }
  });
  return UserFamilyStates;
};
