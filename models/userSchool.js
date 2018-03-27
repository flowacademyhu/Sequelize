module.exports = (sequelize, Datatypes) => {
  let userSchool = sequelize.define('User', {
    user_id: {
      type: Datatypes.INTEGER
    },
    school_id: {
      type: Datatypes.INTEGER
    },
    since: {
      type: Datatypes.DATE
    },
    till: {
      type: Datatypes.DATE
    },
    degree: {
      type: Datatypes.STRING
    }
  });
  return userSchool;
};
