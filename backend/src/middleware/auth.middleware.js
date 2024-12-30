const jwt = require("jsonwebtoken")
const User = require("../models/user.model")

const validateToken = async (req,res, next) => {
    try {
        const token = req.headers.authorization
        if(!token){
            return res.status(403).json({
                message: "Unauthorized request"
            })
        }

        // Verify the token
        const verifiedUserId = jwt.verify(token, process.env.JWT_SECRET)
        
        // Get the current user details(except password) from database
        const currentUser = await User.findById({ _id: verifiedUserId.userId }).select("-password");
        
        req.currentUser = currentUser
        next()
    
    } catch (error) {
        res.json({
            msg: "Token verification failed",
            error: error.message
        })
    }
}

module.exports = validateToken