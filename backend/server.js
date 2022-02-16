const express = require("express") // importing
const dotenv = require("dotenv").config() // importing and stating use
const app = express() // making an expression application 
const PORT = process.env.PORT || 5000


app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use('/api/todo', require('./routes/todoRoutes'))

// my app listening for requests on port PORT
app.listen(PORT, () => {
    console.log(`Server stated on port: ${PORT}`)
})
