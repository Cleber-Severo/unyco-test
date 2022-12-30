import React from 'react'
import './exclusiveContent.css'
const ExclusiveContent = () => {
  return (
    <section className='exclusiveContent'>
        <h2 className='exclusiveContent__title' >CONTENIDO EXCLUSIVO</h2>
        <div className='exclusiveContent__content'>
            <div className='content'>
                <div className='book-icon'></div>
                <h4>E-books</h4>
            </div>
            <div className='content'>
                <div className='pointer-icon'></div>
                <h4>360°Videos</h4>
            </div>
            <div className='content'>
                <div className='tests-icon'></div>
                <h4>Tests</h4>
            </div>
            <div className='content'>
                <div className='tasks-icon'></div>
                <h4>Tarefas</h4>
            </div>
        </div>

        <div className="button-align">
          <button>SOLICITAR INFORMACIÓN</button>
        </div>        
    </section>
  )
}

export default ExclusiveContent