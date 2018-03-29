module.exports = (sequelize, DataType) => {
  var GroupPost = sequelize.define('GroupPost', {

    group_id: {
      type: DataType.INTEGER
    },
    post_id: {
      type: DataType.INTEGER
    }
  });

  return GroupPost;
};
