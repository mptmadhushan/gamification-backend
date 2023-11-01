
const db = require("../models");
const Item = db.assignment_quiz;

exports.create = async (req, res) => {
  const data = {
    quiz: req.body.labels,
    subject: req.body.datasets,
    answer:req.body.answer,
    answertwo :req.body.answertwo,
    labelstwo : req.body.labelstwo,
    CourseCode : req.body.CourseCode,
    LessionNumber : req.body.LessionNumber,
  };

  // Save data in the database
  Item.create(data)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while creating the data.",
      });
    });
};

exports.findAll = (req, res) => {
  return Item.findAll({}).then((data) => {
    console.log(">> All datas", JSON.stringify(data, null, 2));
    res.send(data);
  });
};