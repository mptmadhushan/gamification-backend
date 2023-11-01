const db = require("../models");
const Course = db.course;

exports.create = async (req, res) => {
    const data = {
        CourseCode: req.body.CourseCode,
        CourseTitle: req.body.CourseTitle,
        CourseMainImg: req.body.CourseMainImg,
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
                    courseByCode[courseCode] = {
                        CourseCode: courseCode,
                        CourseMainImg: course.CourseMainImg,
                        CourseTitle: course.CourseTitle,
                        Courses: [],
                    };
                }
                courseByCode[courseCode].Courses.push(course);
            });

            // Categorize PartNumbers for each LessionNumber within Courses
            for (const courseCode in courseByCode) {
                const courses = courseByCode[courseCode].Courses;
                const categorizedCourses = courses.reduce((result, course) => {
                    const { LessionNumber, PartNumber } = course;
                    let existingCategory = result.find((category) => category.LessionNumber === LessionNumber);
                    if (!existingCategory) {
                        existingCategory = {
                            LessionNumber,
                            Parts: [],
                        };
                        result.push(existingCategory);
                    }
                    const partCategory = existingCategory.Parts.find((part) => part.PartNumber === PartNumber);
                    if (partCategory) {
                        partCategory.data.push(course);
                    } else {
                        existingCategory.Parts.push({ PartNumber, data: [course] });
                    }
                    return result;
                }, []);
                courseByCode[courseCode].Courses = categorizedCourses;
            }

            // Convert the grouped courses to an array
            const groupedCourses = Object.values(courseByCode);

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

            // const updatedData = {
            //     CourseTitle: req.body.CourseTitle,
            //     LessionNumber: req.body.LessionNumber,
            //     PartNumber: req.body.PartNumber,
            // };

            Course.update(req.body, {
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

