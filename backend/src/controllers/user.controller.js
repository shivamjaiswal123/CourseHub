const z = require("zod")
const bcrypt = require('bcryptjs');
const jwt = require("jsonwebtoken")

const User = require("../models/user.model")
const Course = require("../models/course.model")

const registerSchema = z.object({
    username: z.string().min(1,"Username is required"),
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters long")
})
const registerUser = async (req, res) => {
    try {
        const parsedPayload = registerSchema.safeParse(req.body)
        if(!parsedPayload.success){
            return res.status(400).json({
                error: parsedPayload.error.errors[0].message
            })
        }
        const { username, email, password} = req.body

        // Check if account already exist with the given username or email
        const userAlreadyExist = await User.findOne({
            $or: [
                {username},
                {email}
            ]
        })
        if(userAlreadyExist){
            if(userAlreadyExist.username === username){
                return res.status(409).json({
                    message: "Username is already taken..."
                })
            }else{
                return res.status(409).json({
                    message: "Email is already taken..."
                })
            }
        }

        // Hash password
        const hashedPass  = await bcrypt.hash(password, 8)

        // Store user information in database
        const user = await User.create({
            username,
            email,
            password: hashedPass
        })

        // Generate token with user id as payload
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET)

        res.status(201).json({
            message: "User registration successful",
            token
        })
    } catch (error) {
        console.error("Error registering user: ", error.message)
        res.status(500).json({
            message: "An internal server error occurred"
        });
    }
}

const loginSchema = z.object({
    email: z.string().email("Invalid email address"),
    password: z.string().min(6, "Password must be atleast 6 characters long")
})
const loginUser = async (req, res) => {
    try {
        const parsedPayload = loginSchema.safeParse(req.body)
        if(!parsedPayload.success){
            return res.status(400).json({
                error: parsedPayload.error.errors[0].message
            })
        }

        const { email, password } = req.body
        
        // Check if user has an account or not
        const userHasAccount = await User.findOne({ email })
        if(!userHasAccount){
            return res.status(404).json({
                message: "User does not exist..."
            })
        }

        // Check if password is correct or not
        const checkPassword = await bcrypt.compare(password, userHasAccount.password)
        if(!checkPassword){
            return res.status(401).json({
                message: "Invalid credentials. Please check your username and password."
            })
        }

        // Generate token with user id as payload
        const token = jwt.sign({ userId: userHasAccount._id }, process.env.JWT_SECRET)

        res.status(200).json({
            message: "User logged in successfully",
            token
        })
    } catch (error) {
        console.error("Error loggin in user: ", error.message)
        res.status(500).json({
            message: "An internal server error occurred"
        });
    }
}

const currentUser = async (req, res) => {
    res.status(200).json({
        user: req.currentUser
    })
}

const passwordSchema = z.object({
    oldPassword: z.string().min(6, "Password must be atleast 6 characters long"),
    newPassword: z.string().min(6, "Password must be atleast 6 characters long")
})
const changeCurrentPassword = async (req, res) => {
    try {
        const parsedPayload = passwordSchema.safeParse(req.body)
        if(!parsedPayload.success){
            return res.status(400).json({
                error: parsedPayload.error.errors[0].message 
            })
        }

        // Get the old and new password
        const { oldPassword, newPassword } = req.body

        // Get the current user details ( it does not have password )
        const user = req.currentUser
        
        // Get the current set password
        const { password }  = await User.findById(user._id)

        // Check if old password is correct
        const oldPasswordCorrect = await bcrypt.compare(oldPassword, password)
        if(!oldPasswordCorrect){
            return res.status(400).json({
                message: "Old password is incorrect"
            })
        }

        // Hash new password
        const hashNewPass = await bcrypt.hash(newPassword, 8)

        // Update the password in database
        await User.findByIdAndUpdate({ _id: user._id }, { password: hashNewPass })

        res.status(200).json({
            message: "Password change successful"
        })
    } catch (error) {
        console.error("Error changing password: ", error.message)
        res.status(500).json({
            message: "An internal server error occurred"
        });
    }
}

const purchaseCourse = async(req, res) => {
    try {
        // Get the course id
        const courseId = req.params.id

        const user = req.currentUser

        // Check if course with this id exist
        const course = await Course.findById(courseId)
        if(!course){
            return res.json({
                message: "Course id is invalid"
            })
        }

        await User.findByIdAndUpdate({_id: user._id}, {
            "$push": {
                purchasedCourses: courseId
            }
        })

        res.status(201).json({
            message: "Purchase successful",
        })
    } catch (error) {
        console.error("Error purchasing course: ", error.message)
        res.status(500).json({
            message: "An internal server error occurred"
        });
    }
}

const allPurchasedCourses = async(req, res) => {
    try {
        const user = req.currentUser

        const courses = await Course.find({
            _id: {
                "$in": user.purchasedCourses
            }
        })

        res.status(200).json({
            courses
        })
    } catch (error) {
        console.error("Error getting all the purchased course: ", error)
        res.status(500).json({
            message: "An internal server error occurred"
        });
    }
}

module.exports = {
    registerUser,
    loginUser,
    currentUser,
    changeCurrentPassword,
    purchaseCourse,
    allPurchasedCourses
}