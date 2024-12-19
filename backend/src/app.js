const express = require("express")
const cors = require("cors")

const app = express()

const userRouter = require("./routes/user.router")
const adminRouter = require("./routes/admin.router")

app.use(express.json())
app.use(cors())

app.use("/api/v1/user", userRouter)
app.use("/api/v1/admin", adminRouter)


module.exports = app