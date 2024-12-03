const UserModel = require("../Models/Users")
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const crypto = require('crypto')

const { verifyEmail } = require('../utils/utils')
const Token = require("../Models/Token")

const signup = async (req, res) => {
    try {
        const { fname, lname, email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (user) {
            return res.status(409).json({
                message: "User already Exists", success: false
            })
        }
        const userModel = new UserModel({ fname, lname, email, password })
        userModel.password = await bcrypt.hash(password, 10)
        await userModel.save()
        const token = await new Token({
            userID: userModel._id,
            token: crypto.randomBytes(32).toString("hex")
        }).save()
        const url = `http://localhost:3000/api/auth/${userModel._id}/verify/${token.token}`
        await verifyEmail(userModel.email, url)

        res.status(201).json({
            message: "Email Sent", success: true
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal Error", success: false
        })
    }
}

const verifyToken = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.params._id })
        if (!user) {
            res.status(400).json({
                message: "Invalid 1 Link", success: false
            })
        }
        const token = await Token.findOne({
            userID: user._id,
            token: req.params.token
        })
        
        if (!token) {
            console.log('kkk')
            return res.status(400).json({
                message: "Invalid 2 link",
                success: false
            })
        }else{
            console.log('kk')
        }
       
        await user.updateOne({
            _id: user._id,
            verified: true
        })
        res.status(200).json({
            message: "Email verified",
            success: true,
        })

        await token.deleteOne()
    } catch (err) {
        res.status(500).json({
            message: "Internal server Error", success: false
        })
    }
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await UserModel.findOne({ email })
        const errMsg = "Auth Failed"
        if (!user) {
            return res.status(403).json({
                message: errMsg, success: false
            })
        }
        const isPassEqual = await bcrypt.compare(password, user.password)
        if (!isPassEqual) {
            return res.status(403).json({
                message: errMsg, success: false
            })
        }

        const isVerified = await user.verified
        if (!isVerified) {
            return res.status(403).json({
                message: 'unverified', success: false
            })
        }

        const jwtToken = jwt.sign(
            { email: user.email, id: user.id },
            process.env.JWT_SECRET,
            { expiresIn: '1hr' }
        )
        res.status(200).json({
            message: "Login Success", success: true, data: jwtToken
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal server Error", success: false
        })
    }
}

const getUserId = async (req, res) => {
    try {
        const user = await UserModel.findOne({ _id: req.body.userId })
        if (!user) {
            res.status(404).send({
                message: 'User Not Found',
                success: false
            })
        } else {
            res.status(200).send({
                success: true,
                data: {
                    fname: user.fname,
                    lname: user.lname,
                    email: user.email
                }
            })
        }
    } catch (err) {
        res.status(500).send({
            message: 'User Info Not Found',
            success: false
        })
    }
}

const resendVerification = async(req, res) => {
    try{
        const user = await UserModel.findOne({
            _id: req.body.userId
        })

        if(user.verified){
            console.log('done')
            return res.status(200).send(({
                message: 'User already Verified',
                success: true
            }))
        }

        const existingToken = await Token.findOne({
            userID: user._id
        })
        
        if(existingToken){
            await existingToken.deleteOne()
            console.log('deleted')
        }

        if(!user){
            return res.status(404).send({
                message: 'User Not found',
                success: false
            })
        }

        const newToken = await new Token({
            userID: user._id,
            token: crypto.randomBytes(32).toString("hex")
        }).save()

        const url = `http://localhost:3000/api/auth/${user._id}/verify/${newToken.token}`
       
        await verifyEmail(user.email, url)

    }catch(err){

        console.log('error')

        return res.status(501).send({
            message: 'Server Error',
            success: false
        })
    }
}

module.exports = {
    signup,
    login,
    verifyToken,
    getUserId,
    resendVerification
}