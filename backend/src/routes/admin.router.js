const { Router } = require("express")

const router = Router()

const { registerAdmin, loginAdmin, currentAdmin, changeCurrentPassword, publishCourse, allPublishedCourses } = require("../controllers/admin.controller")
const authMiddleware = require("../middleware/auth.middleware")
const authorizedUser = require("../middleware/authorized.middleware")

router.route("/register").post(registerAdmin)
router.route("/login").post(loginAdmin)
router.route("/me").get(authMiddleware, currentAdmin)
router.route("/change-password").post(authMiddleware, changeCurrentPassword)
router.route("/publish-course").post(authMiddleware,authorizedUser, publishCourse)
router.route("/courses").get(authMiddleware, allPublishedCourses)

module.exports = router