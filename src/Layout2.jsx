import React from 'react'
import {Outlet} from 'react-router-dom'
import Navbar2 from './components/Navbar2'

export default function Layout2() {
  return (
    <div>
      {/* <Navbar2/>  */}
      <Outlet/> 
    </div>
  )
}
