import React from 'react'
import { BrowserRouter, Routes,Route ,NavLink,Navigate} from 'react-router-dom';
import {Dashboard}from '../componetes/Dashboard';
import {Home}from '../componetes/Home';
import {About}from '../componetes/About';
import logo from '../logo.svg';
function Navation() {
  return (
    <BrowserRouter>
    <nav>
        <img src={logo} alt="" />
        <li>
          <NavLink to='/home' >
            Home
          </NavLink> 

        </li>
        <li><NavLink to='/about' >
            About
          </NavLink> </li>
        <li><NavLink to='/dashboard' >
            Dashboard
          </NavLink> </li>
      </nav>
    <Routes>
      
   
    <Route path='about' element={<About/>} />
    <Route path='dashboard' element={<Dashboard/>} />
    <Route path='home' element={<Home/>} />
    <Route path='/*' element={<Navigate to='/home' replace/> } />


  
    
    </Routes>
    </BrowserRouter>
    
  )
}

export {Navation}