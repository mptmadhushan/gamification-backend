const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const db = require("./app/models");
const Role = db.role;

const app = express();

var corsOptions = {
  origin: "http://localhost:3000",
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());
require("./app/routes/auth.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/quiz.routes")(app);
require("./app/routes/assessment.routes")(app);
require("./app/routes/leaderBoard.routes")(app);

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and Resync Db");
 // initial();
});
function initial() {
  Role.create({
    id: 1,
    name: "student",
  });

  Role.create({
    id: 2,
    name: "admin",
  });

  Role.create({
    id: 3,
    name: "teacher",
  });
}
// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to e-learn application." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8088;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
