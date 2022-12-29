import React, { useState } from 'react'
import Sidebar from '../Sidebar';
import './navbar.css'

const Navbar = () => {

  const [showSideBar, setShsowSideBar] = useState(false);
  const [notificationOn, setNotificationOn] = useState(false);

  const toggleSidebar = () => { 
    setShsowSideBar(!showSideBar);
  }

  const toggleNotificationOn = () => { 
    setNotificationOn(!notificationOn);
  }
  return (
    <div className='Navbar'>
        <img src='/images/unycos-logo.svg' alt="main logo" className='Navbar__logo' />
        <img src='/images/bx-menu.svg' alt="hamburger menu" className='Navbar__menu' onClick={toggleSidebar}/>

        <Sidebar showSideBar={showSideBar} notificationOn={notificationOn} toggleNotificationOn={toggleNotificationOn} />

    </div>
  )
}

export default Navbar