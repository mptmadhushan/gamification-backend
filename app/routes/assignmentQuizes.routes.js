module.exports = (app) => {
  const items = require("../controllers/assignmentQuiz.controller");

  var router = require("express").Router();

  app.post("/api/assignementQuizes/", items.create);


  app.get("/api/assignementQuizes/", items.findAll);

  app.get("/api/assignementQuizes/:id", items.findOne);
  
  app.put("/api/assignementQuizes/:id", items.update);

  app.delete("/api/assignementQuizes/:id", items.delete);


};
