
import './App.css';
import Logo from './img/fcc.png';
import ListaDeTareas from './componentes/ListaDeTareas';
 

function App() {
  return (
    <div className="aplicacion-tareas">

      <div className='logo-contenedor'>
<img
src={Logo} className='logo' />
      </div>
   
   <div className='tareas-lista-principal'>
<h1>Mis tareas</h1>
<ListaDeTareas />
   </div>
    </div>
  );
}

export default App;
