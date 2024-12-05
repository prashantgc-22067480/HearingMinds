import React, { useState } from "react";

import { PasswordResetForm } from "../shared/Form-Components/PasswordResetForm";
// import { param } from "../../../backend/Routes/AuthRouter";

export const PasswordReset = () => {

    const [passwordInfo, setPasswordInfo] = useState({
        newPassword : '',
        confirm: ''
    })

    const handleChange = (e) => {
        const { name, value } = e.target
        const copyPasswordInfo = { ...passwordInfo }
        copyPasswordInfo[name] = value
        setPasswordInfo(copyPasswordInfo)

        console.log(passwordInfo)
    }

    return (
        <div className="center">
            <PasswordResetForm 
                passwordInfo= {passwordInfo}
                handleChange={handleChange}
            />
        </div>
    )
}
