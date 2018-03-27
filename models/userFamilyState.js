module.exports = function (sequelize, DataTypes) {
  let userFamilyState = sequelize.define('UserFamilyState', {
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
  return userFamilyState;
};
