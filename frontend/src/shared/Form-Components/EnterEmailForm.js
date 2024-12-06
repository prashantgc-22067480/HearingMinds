import React from 'react'

import './Form.css'

export const EnterEmailForm = props => {

//     const handleSendEmail = async() =>{

//         const response = await fetch('http://localhost:5000/api/send-reset-mail'.)
// }

  return (
    <div className='form-container__main'>
        <form 
        onSubmit={props.runSubmit}
            className='form-container kanit-regular' 
            style={{gap:'20px'}}
        >

            <div>
                <span>Enter Email</span>
            </div>

            <div>
                <label htmlFor='email'>Email</label><br />
                <input 
                    type='text' 
                    className='input-field'
                    placeholder='Enter Email' 
                    name='email'
                    onChange={props.handleChange}
                    value={props.emailInfo.email}
                /><br />
            </div>

            <div>
                <button type='submit' className='submit-btn'>Submit</button>
            </div>
        </form>
    </div>
  )
}