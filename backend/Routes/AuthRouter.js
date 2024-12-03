const router = require('express').Router()

const { signup, login, verifyToken, getUserId, resendVerification } = require('../Controller/AuthController')
const { signupValidation, loginValidation } = require('../Middleware/AuthValidation')
const { verifyUserAuth } = require('../Middleware/VerifyUser')

router.post('/login', loginValidation, login)

router.post('/signup', signupValidation, signup)

router.get('/:_id/verify/:token', verifyToken)

router.post('/get-user-by-id', verifyUserAuth, getUserId)

router.post('/resend-verification', resendVerification)

module.exports = router