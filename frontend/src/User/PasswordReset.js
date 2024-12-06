import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import { EnterEmailForm } from "../shared/Form-Components/EnterEmailForm";
import { PasswordResetForm } from "../shared/Form-Components/PasswordResetForm";
import { handleFailure, handleSuccess } from "../shared/utils/Toast";
// import { param } from "../../../backend/Routes/AuthRouter";

export const PasswordReset = () => {

    const param = useParams()
    const navigate = useNavigate()

    const [passwordInfo, setPasswordInfo] = useState({
        newPassword : '',
        confirm: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        const copyPasswordInfo = { ...passwordInfo }
        copyPasswordInfo[name] = value
        setPasswordInfo(copyPasswordInfo)
    }

    const handleResetPassword = async(e) =>{

        try{
            e.preventDefault()
            const { newPassword, confirm } = passwordInfo
    
            if(!newPassword || !confirm){
                handleFailure("Missing Fields")
                return
            }

            if(newPassword !== confirm){
                handleFailure("Password Don't Match")
                return
            }
    
            const response = await fetch('http://localhost:5000/api/user/set-new-password',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/JSON',
                    },
                    body: JSON.stringify({
                        id: param._id,
                        userToken : param.token,
                        newPassword : newPassword
                    })
                }
            )
    
            const result = await response.json()
    
            const { message, success } = result
    
            if(!success){
                handleFailure(message)
            }else{
                handleSuccess(message)
                navigate('/login')
            }
           
        }catch(err){
            handleFailure(err)
        }

    }

    return (
        <div className="center">
            <PasswordResetForm 
                passwordInfo= {passwordInfo}
                handleChange={handleChange}
                runSubmit = {handleResetPassword}
            />
        </div>
    )
}

/*
    redirected from Reset Password || Forgot Password

    don't redirect
    maybe add resent link?
    on sub,it send reset link

*/

export const ResetTypeEmail = () =>{

    const [emailInfo, setEmailInfo] = useState({
        email : ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        const copyEmailInfo = {...emailInfo}
        copyEmailInfo[name] = value
        setEmailInfo(copyEmailInfo)

        console.log(emailInfo)
    }

    const handleSendResetEmail = async(e) =>{

        try{
            e.preventDefault()
            const { email } = emailInfo
            if(!email){
                handleFailure('Field Missing')
            }
    
            const response = await fetch('http://localhost:5000/api/user/send-reset-mail',
                {
                    method: 'POST',
                    headers: {
                        'Content-Type':'application/JSON',
                    },
                    body: JSON.stringify(emailInfo)
                }
            )
    
            const result = await response.json()
            const { message, success } = result
    
            if(!success){
                handleFailure(message)
            }else{
                handleSuccess(message)
            }
        }catch(err){
            handleFailure(err)
        }

    }

    return(
        <div className="center">
            <EnterEmailForm
                emailInfo = {emailInfo}
                handleChange = {handleChange}
                runSubmit = {handleSendResetEmail} 
            />
        </div>
    )
}
