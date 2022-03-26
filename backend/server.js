require("dotenv").config() // importing and stating use
const connectDB = require('./database/db')
connectDB()
const express = require("express")
const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/api/todo', require('./routes/todoRoutes'))
app.use('/api/user', require('./routes/userRoutes'))

app.listen(PORT, () => {
    console.log(`Server stated on port: ${PORT}`)
})
