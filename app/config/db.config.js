module.exports = {
  HOST: "db4free.net",
  USER: "gamification_123",
  PASSWORD: "12345678",
  DB: "gamification_123",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};

