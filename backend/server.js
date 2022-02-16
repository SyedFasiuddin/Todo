const express = require("express") // importing
const dotenv = require("dotenv").config() // importing and stating use
const app = express() // making an expression application 
const PORT = process.env.PORT || 3000

// my express app listening for get request
app.get('/', (req, res) => {
    res.json("Hello, World!")
})

app.post('/', (req, res) => {
    res.status(200).send("successful post")
})

// my app listening for requests on port PORT
app.listen(PORT, () => {
    console.log(`Server stated on port: ${PORT}`)
})
