module.exports = (app) => {
    const courses = require("../controllers/course.controller"); 
  
    var router = require("express").Router();
  
    app.post("/api/courses/", courses.create);
  
    app.get("/api/courses/", courses.findAll);
  
    app.get("/api/courses/:id", courses.findOne);
  
    app.put("/api/courses/:id", courses.update);
  
    app.delete("/api/courses/:id", courses.delete);

  };
  