module.exports = (sequelize, DataType) => {
  var GroupRole = sequelize.define('GroupRoles', {

    role_name: {
      type: DataType.STRING
    }
  });

  return GroupRole;
};
