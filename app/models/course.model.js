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
        },
        CourseMainImg: {
            type: Sequelize.STRING,
        },
        courseStatus: {
            type: Sequelize.STRING,
            defaultValue: 'unlocked',
        },
        lessionStatus: {
            type: Sequelize.STRING,
            defaultValue: 'locked',
        },
        partStatus: {
            type: Sequelize.STRING,
            defaultValue: 'locked',
        },
    });

    // Set default values to 'unlocked' for LessionNumber and PartNumber equal to 1
    Course.beforeCreate((course) => {
        if (course.LessionNumber === '1' && course.PartNumber === '1') {
            course.lessionStatus = 'unlocked';
            course.partStatus = 'unlocked';
        }
    });

    return Course;
};
