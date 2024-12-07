import React from "react";
import { Link } from 'react-router-dom'

import logo from '../../Imgs/hearingMinds(2).png'
import { FaUserAlt } from "react-icons/fa";
import './Navigation.css'

import { DropDown } from "../../shared/DropDown/DropDown";
import DropDownItems from '../../shared/DropDown/DropDownItems'

export const Navigation = props =>{

    const items = {
        1: {
            name: 'View Profile',
            link: '/User-profile',
        },
        2 : {
            name: 'Log Out',
            link: '/',
            onclick: () => {
                localStorage.removeItem('token')

                window.alert('logged out')
            }
        }
    };

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
                  
                    {
                        props.isAuth ?
                        <div className="dropdown">
                            <DropDown 
                                buttonText={<FaUserAlt />} 
                                content={
                                    <> {
                                        Object.entries(items).map(([key, item]) => (
                                            <DropDownItems key={key} onClick={(e) => {
                                                if (item.onclick) {
                                                    e.preventDefault()
                                                    item.onclick()
                                                }
                                            }}>
                                                <Link to={item.link}>{item.name}</Link>
                                            </DropDownItems>
                                        ))
                                        } 
                                    </>
                                    } 
                                />
                        </div>
                        :
                        <div className="nav-auth">
                            <Link to='/login'>
                                <button className="auth-btn">Login</button>
                            </Link>
                            <Link to='/signup'>
                                <button className="auth-btn">SignUp</button>
                            </Link>
                        </div>
                    }
            </div>
            
        </nav>
    )
}       