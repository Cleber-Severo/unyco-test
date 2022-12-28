import React, { useState } from 'react'
import './navbar.css'

const Navbar = () => {

  const [showSideBar, setShsowSideBar] = useState(false);

  const toggleSidebar = () => { 
    setShsowSideBar(!showSideBar);
  }

  return (
    <div className='Navbar'>
        <img src='/images/unycos-logo.svg' alt="main logo" className='Navbar__logo' />
        <img src='/images/bx-menu.svg' alt="hamburger menu" className='Navbar__menu' onClick={toggleSidebar}/>

        <div className={showSideBar === false ? 'sidebar hide' : 'sidebar'} >
          <div className='sidebar__user'>
            <img className='logo-reverse' src='/images/Logo-Unycos-reverse.png' alt="main logo"  />
            
            <div>
              <h2>HOLA, DANIELA</h2>
              <img src='/images/bell-outline.svg' alt="main logo" className='bell-icon' />
            </div>
          </div>

          <ul>
            <li>PANEL DE CONTROL</li>
            <li>MIS CURSOS</li>
            <li>PERFIL</li>
            <li>AJUSTES</li>
            <li>TODOS LOS CURSOS</li>
          </ul>

          <div className="sidebar__contact">
            <h3>Contáctanos por whatsapp</h3>
            <img src="/images/bxl-whatsapp.svg" alt="" />
            <span>+34 653 46 73 60</span>
          </div>

          <h3>Cerrar sesión</h3>

        </div>

    </div>
  )
}

export default Navbar