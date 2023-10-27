module.exports = (sequelize, DataTypes) => {
  const assessment = sequelize.define("assessment", {
    quiz: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
  });

  return assessment;
};
