const mongoose = require('mongoose')


const connectToDatabase = async () => {
    try {
        await mongoose.connect(process.env.MONGODBURL);
    } catch (error) {
        console.log("Error connecting to database...", error)
        throw error
    }
}

module.exports = connectToDatabase