import React from 'react';

import './Components/Navigation.css'
import './Components/SideBarNav.css'

import { Navigation } from './Components/Navigaiton.js';
import { SideBarNav } from './Components/SideBarNav.js';

export const NavContainer = props =>{
    return(
        <div className={`nav-container ${props.addClass}`}>
            <Navigation />
            <SideBarNav />
        </div>
    )
}