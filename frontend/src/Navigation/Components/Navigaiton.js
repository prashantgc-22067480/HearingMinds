import React from "react";
import { Link } from 'react-router-dom'

import logo from '../../Imgs/hearingMinds(2).png'
import './Navigation.css'
import reactRouterDom from "react-router-dom";

export const Navigation = () =>{
    return(
        <nav>
            <div className="logo-link">
                <Link to='/' style={{ textDecoration: 'none'}}>
                    <div className="nav-logo">
                        <img src={logo} className="logo" />
                        <span className="kanit-semibold logo-font">Hearing Minds</span>
                    </div>
                </Link>
            </div>
            
            <div className="nav-links kanit-regular">
                <Link to='/'>
                    <div className="list">Home</div>
                </Link>
                <Link to='/OurExperts'>
                    <div className="list">Our Experts</div>
                </Link>
                <Link to='/AboutUs'>
                    <div className="list">About Us</div>
                </Link>
                <Link to='/'>
                    <div className="list">Articles</div>
                </Link>
                <Link to='/'>
                    <div className="list">Assessment</div>
                </Link>
                
                <div className="nav-auth">
                    <Link to='/login'>
                        <button className="auth-btn">Login</button>
                    </Link>
                    <Link to='/signup'>
                        <button className="auth-btn">SignUp</button>
                    </Link>
                </div>
            </div>
            
        </nav>
    )
}       