import React from 'react'
import './navbar.css'

const Navbar = () => {
  return (
    <div className='Navbar'>
        <img src='/images/unycos-logo.svg' alt="main logo" className='Navbar__logo' />
        <img src='/images/bx-menu.svg' alt="hamburger menu" className='Navbar_menu'/>
    </div>
  )
}

export default Navbar