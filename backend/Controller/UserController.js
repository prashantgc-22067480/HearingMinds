const UserModel = require('../Models/Users')
const Token = require("../Models/Token")
const crypto = require('crypto')
const bcrypt = require('bcrypt')

const { resetMail } = require('../utils/utils')

const sendResetMail = async (req, res) =>{
    try{
        const { email } = req.body
    
        const user = await UserModel.findOne({email})
        if(!user){
            return res.status(404).send({
                message: 'User Not Found',
                success: false
            })
        }

        const token = await new Token({
            userID: user._id,
            token: crypto.randomBytes(32).toString("hex")
        }).save()

        const url = `http://localhost:3000/api/user/${user._id}/reset-password/${token.token}`

        await resetMail(user.email, url)

        return res.status(200).send({
            message: 'Mail sent',
            success: true
        })
    }catch(err){
        return res.status(500).send({
                message:'Server Error',
                success: false
            })
    }
}

const resetPassword = async (req, res) =>{

    try{
        const {id, userToken ,newPassword} = req.body

        const user = await UserModel.findOne({_id:id})

        console.log(user)

        if(!user){
            return res.status(404)
        }

        const token = Token.findOne(
            {
                token: userToken,
                userID: user._id
            })

        if(!token){
            return res.error(400)
        }

        token.deleteOne()

        console.log(newPassword)

        const hashPassword = await bcrypt.hash(newPassword, 10)
        
        console.log(hashPassword)

        await user.updateOne({
            password: hashPassword
        })

        return res.status(200).send({
            message: "Password Changed",
            success: true
        })

    }catch(err){
        return res.status(500).send({
            message:'Server Error',
            success: false
        })
    }
}

module.exports = {
    sendResetMail,
    resetPassword
}