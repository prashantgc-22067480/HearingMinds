const { required } = require('joi')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
    },
    verified: {
        type: Boolean,
        default: false
    }
})

const UserModel = mongoose.model('users', UserSchema)

module.exports = UserModel