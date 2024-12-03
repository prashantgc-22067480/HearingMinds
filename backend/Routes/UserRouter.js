const router = require('express').Router()

const { sendResetMail, resetPassword } = require('../Controller/UserController')

router.post('/reset-password', sendResetMail)
router.post('/set-new-password', resetPassword)

module.exports = router