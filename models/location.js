
module.exports = (sequelize, Datatype) => {
  var Location = sequelize.define('Location', {
    gps_location_lon: {
      type: Datatype.INTEGER
    },
    gps_location_lat: {
      type: Datatype.INTEGER
    },
    name: {
      type: Datatype.STRING
    },
    rating: {
      type: Datatype.INTEGER
    }
  });

  return Location;
};
