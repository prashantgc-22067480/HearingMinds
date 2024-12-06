const router = require('express').Router()

const { sendEmailValidation, resetPasswordValidation } = require('../Middleware/ResetPasswordValidation')
const { sendResetMail, resetPassword } = require('../Controller/UserController')

router.post('/send-reset-mail', sendEmailValidation, sendResetMail)
router.post('/set-new-password', resetPasswordValidation, resetPassword)

module.exports = router