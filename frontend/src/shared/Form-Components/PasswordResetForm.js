import React, { useState } from 'react'
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

import "./Form.css"

export const PasswordResetForm = props => {

    const [newPasswordVisibility, setNewPasswordVisibility] = useState(false)
    const [confirmVisibility, setConfirmVisibility] = useState(false)

    const handleNewPassword = () =>{
        setNewPasswordVisibility((prev) => !prev)
    }

    const handleConfirm = () =>[
        setConfirmVisibility((prev) => !prev)
    ]

  return (
    <div className='form-container__main kanit-regular'>
        <form onSubmit={(e) =>{e.preventDefault()}} className='form-container' style={{gap:'20px'}}>

            <div>
                <span>Reset Password</span>
            </div>

            <div>
                <label htmlFor="newPassword">Set New Password</label><br />

                <input 
                    className='password-field' 
                    type={newPasswordVisibility ? "text" : 'password' } 
                    placeholder="New Password" 
                    onChange={props.handleChange} 
                    name='newPassword' 
                    value={props.passwordInfo.newPassword}
                />
                <button className='field-visibility-btn' onClick={handleNewPassword}>
                {newPasswordVisibility ? <FiEye /> : <FiEyeOff />}
                </button><br />
            </div>
            
            <div>
                <label htmlFor="confirmPassword">Confirm Password</label><br />
                <input 
                    className='password-field' 
                    type={confirmVisibility ? "text" : 'password' } 
                    placeholder="Confirm Password"
                    onChange={props.handleChange} 
                    name='confirm' 
                    value={props.passwordInfo.confirm}
                />
                <button className='field-visibility-btn' onClick={handleConfirm}>
                    {confirmVisibility ? <FiEye /> : <FiEyeOff />}
                </button>
            </div>

            <button type='submit' className='submit-btn'>Submit</button>

        </form>
    </div>
  )
}

export default PasswordResetForm