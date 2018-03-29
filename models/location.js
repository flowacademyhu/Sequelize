
module.exports = (sequelize, Datatype) => {
  var Location = sequelize.define('Location', {
    id: {
      type: Datatype.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
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
