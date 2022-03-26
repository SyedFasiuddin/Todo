const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const registerUser = async (req, res) => {
    const { username, email, password } = req.body
    if (!username || !email || !password) {
        res.status(400)
        throw new Error("Please add the required fields")
    }

    const userExists = await User.findOne({ email })
    if (userExists) {
        res.status(400)
        throw new Error("User already exists")
    }

    const salt = await bcrypt.genSalt()
    const hashedPass = await bcrypt.hash(password, salt)

    const user = await User.create({
        username: username,
        email: email,
        password: hashedPass,
    })
    if (user) {
        res.status(201)
        res.json({ _id: user._id })
    } else {
        res.status(400)
        throw new Error("Invalid user")
    }
}

const authUser = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400)
        throw new Error("Please add the required fields")
    }
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
        res.json({ _id: user._id })
    } else {
        res.status(400)
        throw new Error("Invalid user")
    }
}

const getUser = async (req, res) => {
    res.json({ message: "user display" })
}

module.exports = {
    registerUser,
    authUser,
    getUser
}