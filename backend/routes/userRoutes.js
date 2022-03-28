const express = require('express')
const router = express.Router()
const {
    registerUser,
    authUser,
    getUser
} = require('../controllers/userController')
const protect = require('../middleware/authMiddleware')

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/me').get(protect, getUser)

module.exports = router