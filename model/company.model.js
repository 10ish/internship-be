module.exports = (sequelize, Sequelize) => {
  const Company = sequelize.define("company", {
    name: {
      type: Sequelize.STRING,
    },
    catchPhrase: {
      type: Sequelize.STRING,
    },
    bs: {
      type: Sequelize.STRING,
    }
  });
  return Company;
};
