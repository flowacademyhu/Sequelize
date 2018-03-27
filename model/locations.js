
module.exports = (sequelize, Datatype) => {
  var Location = sequelize.define('Location', {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true
    },
    gps_location_lon: {
      type: sequelize.INTEGER
    },
    gps_location_lat: {
      type: sequelize.INTEGER
    },
    name: {
      type: sequelize.STRING
    },
    rating: {
      type: sequelize.INTEGER
    }
  });

  return Location;
};
