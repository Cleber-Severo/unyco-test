import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form>
        <h3 className='form__title'>Obtén más información</h3>
        <input type="text" placeholder='Nombre completo' id="" />
        <input type="text" placeholder='Correo electrónico' id="" />
        <select placeholder='País / Código país' id="">
            <option value="BR">Brazil</option>
            <option value="USA">United States</option>
            <option value="ARG">Argentina</option>
        </select>
        <input type="tel" placeholder='TeLéfono' id="" />
        
        <div className='form__checkboxes'>
            <input type="checkbox" id='data-confidentiality'/>
            <label htmlFor="data-confidentiality">Acepto las condiciones de uso y protección de datos.</label>
        </div>

        <div className='form__checkboxes'>
            <input type="checkbox" id='info-agreement'/>
            <label htmlFor="info-agreement">Me gustaría recibir información sobre nuevos cursos, ofertas y promociones</label>
        </div>

        <button type='submit' onClick={(e) => e.preventDefault()} >ENVIAR</button>
    </form>
  )
}

export default Form