import React from 'react';
import '../componentes/TareaForm.css';

function TareaFormulario(props){
    return(
<from className='tarea-formulario'>

    <input 
    className='tarea-input'
    type='text'
    placeholder='Escribe un deber'
    name='texto' />
    
    <button className='tarea-boton'> Agregar tarea</button>
   
</from>
    );
}
export default TareaFormulario;