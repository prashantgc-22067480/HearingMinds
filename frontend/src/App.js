import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";

import './App.css';
import 'react-toastify/ReactToastify.css'

import { FaUserAlt } from "react-icons/fa";


import { Home } from './pages/Home.js';
import { AboutUs } from './pages/AboutUs'
import { OurExperts } from './pages/OurExperts';
import { NavContainer } from './Navigation/NavContainer';
import { Login } from './Auth/Componenets/Login.js'
import { Signup } from './Auth/Componenets/Signup.js'
import { VerifyEmail } from './Auth/Componenets/VerifyEmail.js'
import { PasswordReset, ResetTypeEmail } from './User/PasswordReset.js';
import { DropDown } from './shared/DropDown/DropDown.js';
import DropDownItems from './shared/DropDown/DropDownItems.js';

function App() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const [isAuthenticated, setIsAuthenticated] = useState(false)

  const handleAuth = () => {
    console.log("Before toggle:", isAuthenticated); // Logs current value
    setIsAuthenticated((prev) => {
        const newState = !prev;
        console.log("After toggle:", newState); // Logs the updated value
        return newState;
    });
    console.log("State update queued!"); // Still logs the old state
};

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY  > lastScrollY & currentScrollY > 200) {
        setShowNavbar(false);
      } else {
        setShowNavbar(true);
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);



  const items = ['View Profile', 'Log Out']


  return (
    
    <BrowserRouter>
      <NavContainer addClass={showNavbar ? 'show' : 'hide'} isAuth= {isAuthenticated} />
        <main id='main'> 
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login handle = {handleAuth} />} />
              <Route path='/OurExperts' element={<OurExperts />} />
              <Route path='/AboutUs' element={<AboutUs />} />
              <Route path='api/auth/:_id/verify/:token' element={<VerifyEmail />} />
              <Route path='/user/:_id/reset-password/:token' element={<PasswordReset />} />

              <Route path='/reset/enter-email' element={<ResetTypeEmail />} />
              <Route path='/drop' element={<DropDown buttonText={<FaUserAlt />} content={<> {items.map(item => <DropDownItems key={item}>{item}</DropDownItems>)} </>} />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
