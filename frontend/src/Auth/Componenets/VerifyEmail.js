import React from 'react'
import { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'

import './VerifyEmail.css'

export const VerifyEmail = () => {

    const [validity, setValidity] = useState({
        messageValidity: 'Unverified',
        valid: false
    })
    const param = useParams()

    useEffect(() => {
        const verifyEmailUrl = async () => {
            try {
                const url = `http://localhost:5000/api/auth/${param._id}/verify/${param.token}`
                const response = await fetch(url)
                const result = await response.json()

                const { message, success } = result
                console.log(message)
                if(success){
                    setValidity((prev) =>({
                        ...prev,
                        messageValidity: message,
                        valid: success
                    }))
                }
            } catch (err) {
                console.log(err)
            }
        }
        verifyEmailUrl()
    }, [])

    const resendVerification = async(e) =>{
        e.preventDefault()
        try{
            const response = await fetch(`http://localhost:5000/api/auth/resend-verification`,{
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    userId: param._id
                })
            })
            window.alert(param.token)
            const result = await response.json()
        }catch(err){
            console.log(err)
        }
    }


    return (
        <div className='verify-email-container' style={{background:validity.valid ? '#D6EADF' : '#FFCCCC '}}>
            <h1>{validity.messageValidity}</h1>
            <button 
                className='verify-email-btn'
                style={{background: validity.valid ? '#89a7a6' : '#c69696'}}
                onClick={
                    resendVerification
                }
            >
                {
                    validity.valid ? 
                    'Go to Login':
                    'Resend Email'
                }
            </button>
        </div>
    )
}