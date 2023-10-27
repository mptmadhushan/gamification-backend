module.exports = (sequelize, DataTypes) => {
  const quiz = sequelize.define("quiz", {
    quiz: {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
  });

  return quiz;
};
