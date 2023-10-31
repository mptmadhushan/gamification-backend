module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define("users", {
    username: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    password: {
      type: Sequelize.STRING,
    },
    level: {
      type: Sequelize.STRING,
    },
    points:{
      type: Sequelize.STRING,
    },
    rewards:{
      type: Sequelize.STRING,
    }
  });

  return User;
};
