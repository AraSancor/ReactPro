
import './App.css';
import Logo from './img/fcc.png';
import TareaFormulario from './componentes/TareaFormularo';

function App() {
  return (
    <div className="aplicacion-tareas">

      <div className='logo-contenedor'>
<img
src={Logo} className='logo' />
      </div>
   
   <div className='tareas-lista-principal'>
<h1>Mis deberes</h1>
<TareaFormulario/>
   </div>
    </div>
  );
}

export default App;
