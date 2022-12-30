import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <footer>
            <h3 className='footer__comunityTitle'>únete a la comunidad</h3>
            <div className='footer__icons'>
                <div className='facebook-icon'></div>
                <div className='instagram-icon'></div>
                <div className='twitter-icon'></div>
                <div className='youtube-icon'></div>
            </div>

            <div className="footer__contact">
                <h4>¿Dudas? Contáctanos por whatsapp</h4>
                <button>
                    <div className='whatsapp-icon'></div>
                    <span>+34 653 46 73 60</span>
                </button>
            </div>

            <div className='footer__logoInfo'>
                <img src="/images/unycos-logo.svg" alt="" />
                <div className='footer__logoInfo-txt'>
                    <small>USD($)</small>
                    <small>/</small>
                    <small>EUR (&euro;)</small>
                </div>
            </div>

            <div className='footer__legalInfo'>
                <p>Terminos y condiciones</p>
                <p>Política de privacidad</p>
                <p>Aviso legal</p>
            </div>
        
    </footer>
    
  )}

export default Footer