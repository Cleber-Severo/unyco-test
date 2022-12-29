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
      
     

      <div className='Navbar__container'>
        <h4 >curso</h4>
        <h4>hola, Daniela</h4>
        <div className='Navbar__menu' onClick={toggleSidebar}></div>

        <Sidebar showSideBar={showSideBar} notificationOn={notificationOn} toggleNotificationOn={toggleNotificationOn} />

      </div>



      
    </div>
  )
}

export default Navbar