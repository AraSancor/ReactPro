
import './App.css';
import Logo from './img/fcc.png';
import Tarea from './componentes/Tarea';

function App() {
  return (
    <div className="aplicacion-tareas">

      <div className='logo-contenedor'>
<img
src={Logo} className='logo' />
      </div>
   
   <div className='tareas-lista-principal'>
<h1>Mis deberes</h1>
<Tarea texto='Aprender React' />
   </div>
    </div>
  );
}

export default App;
