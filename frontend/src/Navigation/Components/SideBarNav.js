import React from "react";
import { Link } from 'react-router-dom'
import { useState, useEffect } from "react";

import Backdrop from "../../shared/Backdrop";
import SideDraw from './SideDraw.js'

export const SideBarNav = () =>{

    const [drawerIsOpen, setDrawerIsOpen] = useState(false)

    const openDrawerHandler = () =>{
        setDrawerIsOpen(true)
    }
    const closeDrawerHandler = () =>{
        setDrawerIsOpen(false)
    }

    useEffect(() =>{
        const windowSideBar = () =>{
            if (window.innerWidth >= 900) {
                closeDrawerHandler()
            }
        }
        window.addEventListener('resize', windowSideBar)
        windowSideBar();
        return () => {
            window.removeEventListener('resize', windowSideBar);
        };
    }, [])

    return(
        <React.Fragment>
            <div className="sb-nav-container">
                <div>
                    <button className={`sb-menu-btn  ${drawerIsOpen ? 'act' : ''}`} onClick={openDrawerHandler}>
                        <div className={`menu-icon`}>
                            <div className="bar"></div>
                            <div className="bar"></div>
                            <div className="bar"></div>
                        </div>
                    </button>
                </div>
            </div>

            <SideDraw show={drawerIsOpen}>
                <div className="side-bar">
                    <div className="bar-heading" >
                        <div className="sb-menu">
                            <span className="kanit-semibold logo-font" style={{fontSize:40}}>Menu</span>
                        </div>

                        <div className="bar-links kanit-regular">
                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <div className="sb-links" onClick={closeDrawerHandler}>
                                    Home
                                </div>
                            </Link>

                            <Link to='/OurExperts' style={{ textDecoration: 'none' }}>
                                <div className="sb-links" onClick={closeDrawerHandler}>
                                    Our Experts
                                </div>
                            </Link>

                            <Link to='/AboutUs' style={{ textDecoration: 'none' }}>
                                <div className="sb-links" onClick={closeDrawerHandler}>
                                    About Us
                                </div>
                            </Link>

                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <div className="sb-links" onClick={closeDrawerHandler}>
                                    Articles
                                </div>
                            </Link>

                            <Link to='/' style={{ textDecoration: 'none' }}>
                                <div className="sb-links" onClick={closeDrawerHandler}>
                                    Assessment
                                </div>
                            </Link>
                        </div>
                    </div>
                    
                    <div className="bar-auth kanit-regular">
                        <div>
                            <Link to='/login'>
                                <button className="sb-btn kanit-regular logo-font" onClick={closeDrawerHandler}>Login</button>
                            </Link>

                        </div>
                        <div>
                            <Link to='/signup'>
                                <button className="sb-btn kanit-regular logo-font" onClick={closeDrawerHandler}>SignUp</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </SideDraw>

            {drawerIsOpen ? <Backdrop onClick={closeDrawerHandler} />: null}
        </React.Fragment>
    )
}