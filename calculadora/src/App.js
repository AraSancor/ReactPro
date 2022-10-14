import './App.css';
import fccLogo from './img/fcc.png';
import Boton from './componentes/Boton';

function App() {
  return (
    <div className='App'>
      <div className='fcc-logo-cont'>
        <img
          src={fccLogo}
          className='fcc-logo'
          alt='Logo' />
      </div>

      <div className='cont-calc'>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>+</Boton>
          <Boton>3</Boton>
        </div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
        <div className='fila'></div>
      </div>

    </div>
  );
}

export default App;
