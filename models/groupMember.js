module.exports = (sequelize, DataType) => {
  var GroupMember = sequelize.define('GroupMember', {

    user_id: {
      type: DataType.INTEGER
    },
    group_role_id: {
      type: DataType.INTEGER
    },
    group_id: {
      type: DataType.INTEGER
    }
  });

  return GroupMember;
};
