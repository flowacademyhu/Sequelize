module.exports = (sequelize, Datatypes) => {
  let user = sequelize.define('User', {
    name: {
      type: Datatypes.STRING
    },
    e_mail: {
      type: Datatypes.STRING
    },
    phone: {
      type: Datatypes.STRING
    },
    gender: {
      type: Datatypes.TINYINT
    },
    username: {
      type: Datatypes.STRING
    },
    date_of_b: {
      type: Datatypes.STRING
    },
    birth_place: {
      type: Datatypes.STRING
    },
    address: {
      type: Datatypes.STRING
    },
    religion_id: {
      type: Datatypes.INTEGER
    }
  });
  user.associate = (models) => {
    user.hasMany(models.groupMember, {foreignKey: 'user_id'});
  };
  return user;
};
