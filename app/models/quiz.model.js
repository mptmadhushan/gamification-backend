module.exports = (sequelize, DataTypes) => {
  const quiz = sequelize.define("quiz", {
    quiz: {
      type: DataTypes.STRING,
    },
    labelstwo : {
      type: DataTypes.STRING,
    },
    subject: {
      type: DataTypes.STRING,
    },
    answer: {
      type: DataTypes.STRING,
    },
    answertwo : {
      type: DataTypes.STRING,
    },
  });

  return quiz;
};
