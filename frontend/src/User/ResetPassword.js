import React, { useState } from "react";
import { useParams } from "react-router-dom";


import { handleFailure, handleSuccess } from "../shared/utils/Toast";
import { param } from "../../../backend/Routes/AuthRouter";

export const ResetPassword = () => {

    const [newPassword, setNewPassword] =  useState({
        password:'',
        confirmPassword: ''
    })

    const handleReset = async (e) => {

        const { password, confirmPassword } = newPassword
        if(password !== confirmPassword){
           return handleFailure('Password not match')
        }

        try {
            const response = await fetch("http://localhost:5000/api/user/set-new-password", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: {
                    id: param._id,
                    userToken: param.token,
                    newPassword: password
                }
            })
        } catch (err) {
            return handleFailure('Fail')
        }
    }





    return (
        <h1>To Reset</h1>
    )
}
