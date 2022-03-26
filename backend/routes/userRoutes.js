const express = require('express')
const router = express.Router()
const {
    registerUser,
    authUser,
    getUser
} = require('../controllers/userController')

router.route('/register').post(registerUser)
router.route('/login').post(authUser)
router.route('/me').get(getUser)

module.exports = router