import React from 'react'
import { BrowserRouter, Routes,Route ,NavLink,Navigate} from 'react-router-dom';
import {Dashboard}from '../componente/Dashboard';
import {Home}from '../componente/Home';
import {About}from '../componente/About';
import '../componente/Header.css'
function Navegation() {
  return (
    <BrowserRouter>
    <nav className='header'>
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

export {Navegation}