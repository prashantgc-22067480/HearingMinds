import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import { ToastContainer } from "react-toastify";

import './App.css';
import 'react-toastify/ReactToastify.css'

import { Home } from './pages/Home.js';
import { AboutUs } from './pages/AboutUs'
import { OurExperts } from './pages/OurExperts';
import { NavContainer } from './Navigation/NavContainer';
import { Login } from './Auth/Componenets/Login.js'
import { Signup } from './Auth/Componenets/Signup.js'
import { VerifyEmail } from './Auth/Componenets/VerifyEmail.js'
import { PasswordReset, ResetTypeEmail } from './User/PasswordReset.js';

function App() {

  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

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


  return (
    
    <BrowserRouter>
      <NavContainer addClass={showNavbar ? 'show' : 'hide'} />
        <main id='main'> 
          <ToastContainer />
          <Routes>
            <Route path="/" element={<Home />} />
              <Route path='/signup' element={<Signup />} />
              <Route path='/login' element={<Login />} />
              <Route path='/OurExperts' element={<OurExperts />} />
              <Route path='/AboutUs' element={<AboutUs />} />
              <Route path='api/auth/:_id/verify/:token' element={<VerifyEmail />} />
              <Route path='/user/:_id/reset-password/:token' element={<PasswordReset />} />

              <Route path='/reset/enter-email' element={<ResetTypeEmail />} />
              <Route path='/reset' element={<PasswordReset />} />

              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </main>
    </BrowserRouter>
  );
}

export default App;
