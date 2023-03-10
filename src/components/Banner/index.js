import React from 'react'

import './banner.css'
const Banner = () => {
  return (
    <div className='banner'>
      <div className="banner__image">
        <h1>MIREIA BELMONTE</h1>
        <h2>enseña natación</h2>
      </div>

      <div className='banner__grid' >
        <div className="button-align">
          <button>SOLICITAR INFORMACIÓN</button>
        </div>

        <div className="banner__icons">
          <div className="icon-modules">
            <div className="book-icon"></div>
            <h4>12 MÓDULOS</h4>
          </div>
          <div className="icon-hours">
            <div className="film-icon"></div>
            <h4>+3,5 horas</h4> 
          </div>
        </div>
      </div>


      <div className="mobile-info">
        <h3>APRENDE natación con una campeona olímpica</h3>
        
        <div className="button-align">
          <button>Preguntas Frecuentes</button>
        </div>
      </div>
      
    </div>
  )
}

export default Banner