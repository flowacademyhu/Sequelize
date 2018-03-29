module.exports = (sequelize, Datatypes) => {
  let userWorkplace = sequelize.define('User', {
    user_id: {
      type: Datatypes.INTEGER
    },
    workplace_id: {
      type: Datatypes.INTEGER
    },
    start_date: {
      type: Datatypes.DATE
    },
    end_date: {
      type: Datatypes.DATE
    },
    position: {
      type: Datatypes.STRING
    }
  });
  return userWorkplace;
};
