module.exports = (sequelize, DataTypes) => {
  const GroupFile = sequelize.define('GroupFile', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    url: {
      type: DataTypes.STRING
    },
    group_id: {
      // mul
      type: DataTypes.INTEGER
    }
  });
  return GroupFile;
};
