const { Router } = require("express")
const { allCourse, featuredCourse } = require("../controllers/course.controller")

const router = Router()

router.route("/").get(allCourse)
router.route("/featured").get(featuredCourse)

module.exports = router