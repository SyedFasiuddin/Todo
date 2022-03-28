require("dotenv").config() // importing and stating use
require('./database/db')()

const express = require("express")
const app = express()
const errorHandler = require("./middleware/errorMiddleware")
const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(errorHandler)

app.use('/api/todo', require('./routes/todoRoutes'))
app.use('/api/user', require('./routes/userRoutes'))

app.listen(PORT, () => {
    console.log(`Server stated on port: ${PORT}`)
})
