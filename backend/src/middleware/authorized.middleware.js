const authorizedUser = async (req, res, next) => {
    try {
        const { isAdmin } = req.currentUser

        if(!isAdmin){
            return res.status(403).json({
                msg: "You are not authorized to publish the course"
            })
        }
        next()
    } catch (error) {
        res.status(500).json({
            msg: "An error occurred while authorizing user",
            error: error.message,
        });
    }
}

module.exports = authorizedUser