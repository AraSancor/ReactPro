import React from 'react';
import TareaFormulario from './TareaFormularo';
import '../componentes/ListaDeTareas.css';

function ListaDeTareas(){

    return(
        <>
<TareaFormulario/>
<div className='tarea-lista-cotenedor'>
Lista de tardeas
</div>
        </>
    );
}
export default ListaDeTareas;