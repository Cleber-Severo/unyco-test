import React from 'react'
import './Form.css'

const Form = () => {
  return (
    <form>
        <input type="text" placeholder='Nombre completo' id="" />
        <input type="text" placeholder='Correo electrónico' id="" />
        <select placeholder='País / Código país' id="">
            <option value="BR">Brazil</option>
            <option value="USA">United States</option>
            <option value="ARG">Argentina</option>
        </select>
        <input type="tel" placeholder='TeLéfono' id="" />
        <button type='submit'>ENVIAR</button>
    </form>
  )
}

export default Form