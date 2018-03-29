module.exports = (sequelize, Datatypes) => {
  let UserWorkplaces = sequelize.define('UserWorkplace', {
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
  return UserWorkplaces;
};
