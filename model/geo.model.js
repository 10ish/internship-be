

module.exports = (sequelize, Sequelize) => {
  const GeoCoordinate = sequelize.define("geoCoordinate", {
    lat: {
      type: Sequelize.STRING,
    },
    lng: {
      type: Sequelize.STRING,
    }
  });
  return GeoCoordinate;
};
