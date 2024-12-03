const nodemailer = require('nodemailer')

const verifyEmail = async(email, url)=>{

    try{
        const transporter = nodemailer.createTransport({
            service:'Gmail',
            host: 'smtp.gmail.com',
            port: '587',
            secure: false,
            auth:{
                user: process.env.USER,
                pass: process.env.PASS
            }
        })
        await transporter.sendMail({
            from: "gcp0053@gmail.com",
            to: email,
            subject: 'Email Verification',
            html: `
                <h1>verify Email</h1>
                ${url}
            `
        },function(err, info){
            if(err){
                console.log(err)
            }else{
                console.log(info.response)
            }
        })
    }catch(err){
        console.log(err)
    }
}

const resetMail = async(email, url)=>{
    try{

        const transporter = nodemailer.createTransport({
            service:'Gmail',
            host: 'smtp.gmail.com',
            port: '587',
            secure: false,
            auth:{
                user: process.env.USER,
                pass: process.env.PASS
            }
        })
        await transporter.sendMail({
            from: "gcp0053@gmail.com",
            to: email,
            subject: 'Reset Password',
            html: `
                <h1>Reset Password</h1>
                ${url}
            `
        },function(err, info){
            if(err){
                console.log(err)
            }else{
                console.log(info.response)
            }
        })
    }catch(err){
        console.log(err)
    }
}

module.exports ={
    verifyEmail,
    resetMail
}