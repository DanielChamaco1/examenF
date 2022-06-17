import React from 'react'
import { About } from './About'
import { Dashboard } from './Dashboard'
import { Home } from './Home'

function Header() {
  return (
      <>
    <Home/>
    <About/>
    <Dashboard/></>
  )
}

export default Header