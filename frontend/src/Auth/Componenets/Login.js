import React from "react";
import { Link, useNavigate } from 'react-router-dom'
import { useState, useEffect } from "react";

import { Auth } from "../Auth";
import { handleFailure, handleSuccess } from '../../shared/utils/Toast';

import './Authentication.css'

export const Login = () =>{
    const navigate = useNavigate()
    const[loginInfo, setLoginInfo] = useState({
        email:'',
        password:''
    })

    const handleChange = (e) =>{
        const {name, value} = e.target
        const copyLoginInfo = {...loginInfo}
        copyLoginInfo[name] = value
        setLoginInfo(copyLoginInfo)
        console.log(loginInfo)
    }

    const handleLogin = async (e) =>{
        e.preventDefault()
        const {email,password} = loginInfo
        if(!email || !password){
           return handleFailure('Please Fill Up')
        }
        try{
            const url = "http://localhost:5000/api/auth/login"
            const response = await fetch(url,{
                method: "POST",
                headers:{
                    'Content-Type':'application/json'
                },
                body: JSON.stringify(loginInfo)
            })
            const result = await response.json()
            const {message,success, data} = result
            if(success){
                handleSuccess(message)
                navigate('/')
            }
            else{
                handleFailure(message)
            }
            localStorage.setItem("token",data)
        }
        catch(err){
            handleFailure(err)
        }
    }

    return(
        <Auth>
            <div className="Authenticaiton-container__main">
                <div className="Authenticaiton-container">
                    <div className="Authenticaiton-header">
                        <span className="kanit-semibold">Login</span>
                    </div>
                    <div className="Authenticaiton kanit-regular">
                        <form onSubmit={handleLogin}>
                            <div>
                                <label htmlFor="email">Email</label><br />
                                <input 
                                    onChange={handleChange}
                                    type="text"
                                    name="email"
                                    placeholder="Enter Name"
                                    value={loginInfo.email}
                                /><br />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label><br />
                                <input 
                                    onChange={handleChange}
                                    type="password"
                                    name="password"
                                    placeholder="Enter Email address"
                                    value={loginInfo.password}
                                /><br />
                            </div>
                            <div>
                                <button type="submit">Login</button><br/>
                                <span className="bottom-signup">
                                    <Link tp={'/reset/enter-email'}>Forgot Password?</Link>
                                </span><br />
                                <span className="bottom-signup">Already have an account?<Link to={'/signup'}>Register</Link></span>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
         </Auth>
    )
}