import React, { useState } from 'react';
import '../componentes/TareaForm.css';
import {v4 as uuidv4} from 'uuid';

function TareaFormulario(props) {

  const [input, setInput] = useState('');

  const manejarCambio = e => {
    setInput(e.target.value);

  }

  const manejarEnvio = e => {
    e.preventDefault();
    const tareaNueva = {
      id: uuidv4(),
      texto: 'input',
      completada: false
    }
props.onSubmit(tareaNueva);
  }


  return (
    <from 
    className='tarea-formulario'
       onSubmit={manejarEnvio}>
      <input
        className='tarea-input'
        type='text'
        placeholder='Escribe un deber'
        name='texto'
        onChange={manejarCambio}  />
        <button className='tarea-boton'>Agregar </button>
     

     

    </from>
  );
}
export default TareaFormulario;