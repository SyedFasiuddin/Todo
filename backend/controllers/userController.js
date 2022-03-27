const User = require('../models/userModel')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const generateJwtToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

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
        res.json({
            _id: user._id,
            token: generateJwtToken(user._id)
        })
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
        res.json({
            _id: user._id,
            token: generateJwtToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error("Invalid user")
    }
}

const getUser = async (req, res) => {
    const { _id, username, email } = await User.findById(req.user.id)

    res.status(200).json({
        id: _id, username, email
    })
}

module.exports = {
    registerUser,
    authUser,
    getUser
}