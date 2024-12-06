const joi = require('joi')

const sendEmailValidation = (req, res, next) =>{

    const schema = joi.object({
        email: joi.string().email().required()
    })

    const { error } = schema.validate(req.body)

    if(error){
        return res.status(400).json({
            message: "Invalid Email", 
            success: false
        })
    } next()
}

const resetPasswordValidation = (req, res, next) => {
    const schema = joi.object({
        newPassword: joi.string().min(4).max(20).required()
    })

    const password = {
        newPassword: req.body.newPassword
    }  

    const { error } = schema.validate(password)

    if(error){
        return res.status(400).json({
            message: "Password Not Strong", 
            success: false
        })
    }
    next()
}
module.exports = {
    sendEmailValidation,
    resetPasswordValidation
}