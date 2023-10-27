module.exports = (sequelize, DataTypes) => {
  const leaderboard = sequelize.define("leaderboard", {
    userID: {
      type: DataTypes.STRING,
    },
    rewards: {
      type: DataTypes.STRING,
    },
  });

  return leaderboard;
};
