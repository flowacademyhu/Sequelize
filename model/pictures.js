module.exports = (sequelize, Datatype) => {
  var picture = sequelize.define('Pictures', {
    format: {
      type: Datatype.ENUM('png', 'jpg', 'bmp', 'gif', 'svg')
    },
    url: {
      type: Datatype.STRING
    }
  });
  return picture;
};
