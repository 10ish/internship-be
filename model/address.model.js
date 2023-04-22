module.exports = (sequelize, Sequelize) => {
  const Address = sequelize.define("address", {
    street: {
      type: Sequelize.STRING,
    },
    suite: {
      type: Sequelize.STRING,
    },
    city: {
      type: Sequelize.STRING,
    },
    zipcode: {
      type: Sequelize.STRING,
    }
  });
  return Address;
};
