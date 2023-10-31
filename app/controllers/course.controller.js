const db = require("../models");
const Course = db.course;

exports.create = async (req, res) => {
    const data = {
        CourseCode: req.body.CourseCode,
        CourseTitle: req.body.CourseTitle,
        LessionNumber: req.body.LessionNumber,
        PartNumber: req.body.PartNumber,
        LessionTitle: req.body.LessionTitle,
        PartTitle: req.body.PartTitle,
        Points: req.body.Points,
        LinkTitle: req.body.LinkTitle,
        Link: req.body.Link,
    };


    Course.create(data)
        .then((course) => {
            res.send(course);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while creating the course.",
            });
        });
};

exports.findAll = (req, res) => {
    Course.findAll()
      .then((courses) => {
        // Create an object to store courses grouped by CourseCode
        const courseByCode = {};
  
        // Group courses by CourseCode
        courses.forEach((course) => {
          const courseCode = course.CourseCode;
          if (!courseByCode[courseCode]) {
            courseByCode[courseCode] = [];
          }
          courseByCode[courseCode].push(course);
        });
  
        // Convert the grouped courses to an array
        const groupedCourses = Object.keys(courseByCode).map((courseCode) => {
          return {
            CourseCode: courseCode,
            Courses: courseByCode[courseCode],
          };
        });
  
        res.send(groupedCourses);
      })
      .catch((err) => {
        res.status(500).send({
          message: err.message || "Some error occurred while retrieving courses.",
        });
      });
  };
  

exports.findOne = (req, res) => {
    const courseId = req.params.id;

    Course.findByPk(courseId)
        .then((course) => {
            if (!course) {
                return res.status(404).send({ message: "Course not found" });
            }
            res.send(course);
        })
        .catch((err) => {
            res.status(500).send({
                message: err.message || "Some error occurred while retrieving the course.",
            });
        });
};

exports.update = (req, res) => {
    const courseId = req.params.id;

    Course.findByPk(courseId)
        .then((course) => {
            if (!course) {
                return res.status(404).send({ message: "Course not found" });
            }

            const updatedData = {
                CourseTitle: req.body.CourseTitle,
                LessionNumber: req.body.LessionNumber,
                PartNumber: req.body.PartNumber,
            };

            Course.update(updatedData, {
                where: { id: courseId }
            })
                .then(() => {
                    res.send({ message: "Course updated successfully." });
                })
                .catch((err) => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while updating the course."
                    });
                });
        });
};


exports.delete = (req, res) => {
    const courseId = req.params.id;

    Course.findByPk(courseId)
        .then((course) => {
            if (!course) {
                return res.status(404).send({ message: "Course not found" });
            }

            course.destroy()
                .then(() => {
                    res.send({ message: "Course deleted successfully." });
                })
                .catch((err) => {
                    res.status(500).send({
                        message: err.message || "Some error occurred while deleting the course."
                    });
                });
        });
};

