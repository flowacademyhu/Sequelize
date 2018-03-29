module.exports = (sequelize, DataType) => {
  var GroupRole = sequelize.define('GroupRole', {

    role_name: {
      type: DataType.STRING
    }
  });

  return GroupRole;
};
