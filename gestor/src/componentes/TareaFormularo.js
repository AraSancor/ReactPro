import React, { useState } from 'react';
import '../componentes/TareaForm.css';

function TareaFormulario(props) {

    const manejarEnvio = e => {

        const [input, setInput] = useState('');

        const manejarCambio = e => {
            console.log('Escribiendo');
        }

        const tareaNueva = {
            id: '34545',
            texto: 'hola'
    }
    }

    return (
        <from className='tarea-formulario'>

            <input
                className='tarea-input'
                type='text'
                placeholder='Escribe un deber'
                name='texto' 
                onChange={manejarCambio}/>

            <button className='tarea-boton'> Agregar tarea</button>

        </from>
    );
}
export default TareaFormulario;