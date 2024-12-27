const Course = require("../models/course.model")

const allCourse = async (req, res) => {
    const courses = await Course.find({})
    res.status(200).json({
        courses
    })
}

const featuredCourse = async (req, res) => {
    const featuredCourses = await Course.find({ featured: true })
    res.status(200).json({
        featuredCourses
    })
}

module.exports = {
    allCourse,
    featuredCourse
}