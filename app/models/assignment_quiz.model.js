module.exports = (sequelize, DataTypes) => {
  const assignment_quiz = sequelize.define("assignment_quiz", {
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
    CourseCode : {
      type: DataTypes.STRING,
    },
    LessionNumber : {
      type: DataTypes.STRING,
    },
  });

  return assignment_quiz;
};
