import React from 'react'

import './sidebar.css'

const Sidebar = ({showSideBar, notificationOn, toggleNotificationOn}) => {
  return (
    <div className={showSideBar === false ? 'sidebar hide' : 'sidebar'} >
          <div className='sidebar__user'>
            <img className='logo-reverse' src='/images/Logo-Unycos-reverse.png' alt="main logo"  />
            
            <div>
              <h2>HOLA, DANIELA</h2>
              
              <div className={notificationOn === false ? 'notification off' : 'notification on'} onClick={toggleNotificationOn}></div>
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
            
            <div className="contact__number">
              <div className='whats-logo' ></div>
              <span>+34 653 46 73 60</span>
            </div>
          </div>

          <h3 className='sidebar__close-section' >Cerrar sesión</h3>

        </div>
  )
}

export default Sidebar