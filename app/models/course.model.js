module.exports = (sequelize, Sequelize) => {
    const Course = sequelize.define("course", {
        CourseCode: {
            type: Sequelize.STRING,
        },
        CourseTitle: {
            type: Sequelize.STRING,
        },
        LessionNumber: {
            type: Sequelize.STRING,
        },
        LessionTitle: {
            type: Sequelize.STRING,
        },
        PartNumber: {
            type: Sequelize.STRING,
        },
        PartTitle: {
            type: Sequelize.STRING,
        },
        Points: {
            type: Sequelize.INTEGER,
        },
        LinkTitle: {
            type: Sequelize.STRING,
        },
        Link: {
            type: Sequelize.STRING,
        }

    });
    return Course;
};
