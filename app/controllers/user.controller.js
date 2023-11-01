const db = require("../models");
const user = db.user;

exports.allAccess = (req, res) => {
  res.status(200).send("Public Content.");
};

exports.userBoard = (req, res) => {
  res.status(200).send("User Content.");
};

exports.adminBoard = (req, res) => {
  res.status(200).send("Admin Content.");
};

exports.moderatorBoard = (req, res) => {
  res.status(200).send("Moderator Content.");
};


exports.updateLPR = (req, res) => {
  const id = req.params.id;
  user.findByPk(id)
    .then((user) => {
      if (!user) { // Change from !id to !user
        return res.status(404).send({ message: "User not found" });
      }

      const data = {
        level: req.body.level,
        points: req.body.points,
        rewards: req.body.rewards,
      };

      user.update(data, {
        where: { id: id }
      })
        .then(() => {
          res.send({ message: "User LPR updated successfully." });
        })
        .catch((err) => {
          res.status(500).send({
            message: err.message || "Some error occurred while updating the User."
          });
        });
    });
};



exports.getLPR = (req, res) => {
  const id = req.params.id;
  console.log(id);

  user.findByPk(id)
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: "User not found" });
      }
      res.send(user);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving the User.",
      });
    });
};