require('dotenv').config()

const app = require("./app.js")
const connectToDatabse = require("./db/db.js")

// connect to databse and start the server
const startTheServer = async () => {
    try {
        await connectToDatabse()
        console.log("DB is connected successfully...")

        app.listen(process.env.PORT || 8000, () => {
            console.log(`Server is listening on port ${process.env.PORT}`);
        })

    } catch (error) {
        console.error("Error starting the server:", error)
        process.exit(1) // Exit the process with failure code
    }
}

startTheServer()



//connect to database and on successful connection, start the server
// connectToDatabse().then(() => {
//     app.listen(process.env.PORT, () => {
//         app.on("error", err => {
//             console.log("Error: ", err);
//             throw err;
//         })
//         console.log(`Server is listening on port ${process.env.PORT}`);
//     })    
// });