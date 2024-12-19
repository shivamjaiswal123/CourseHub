const { Router } = require("express")

const router = Router()

const { registerUser, loginUser, currentUser, changeCurrentPassword, purchaseCourse, allPurchasedCourses } = require("../controllers/user.controller")
const authMiddleware = require("../middleware/auth.middleware")

router.route("/register").post(registerUser)
router.route("/login").post(loginUser)
router.route("/me").get(authMiddleware, currentUser)
router.route("/change-password").post(authMiddleware, changeCurrentPassword)
router.route("/purchase-course/:id").post(authMiddleware, purchaseCourse)
router.route("/courses").get(authMiddleware, allPurchasedCourses)

module.exports = router