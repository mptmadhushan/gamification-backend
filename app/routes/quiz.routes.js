module.exports = (app) => {
  const items = require("../controllers/quiz.controller");

  var router = require("express").Router();

  router.post("/", items.create);


  router.get("/findAll", items.findAll);


  app.use("/api/quiz", router);
};
