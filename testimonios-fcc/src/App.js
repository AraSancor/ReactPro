
import './App.css';
import Testimonio from './componentes/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal' >
        <h1>World Wide Web</h1>
      </div>
      
      <Testimonio
      nombre='Tim Berners-Lee'
      pais='Reino Unido'
      imagen='Tim'
      cargo='	Informático teórico, físico, programador, profesor universitario, desarrollador web, ingeniero e inventor'
      empresa='World Wide Web Consortium'
      testimonio='Cuando inventé la web, no tuve que pedirle permiso a nadie. Ahora, millones de personas 
      la utilizan libremente. Me preocupa que todo eso se vaya a acabar en los Estados Unidos de América.' />
          <Testimonio
      nombre='Lawrence G. Roberts'
      pais='Estados Unidos'
      imagen='Larry'
      cargo='Informático teórico y director de tecnología'
      empresa='	
      Academia Estadounidense de las Artes y las Ciencias
      Academia Nacional de Ingeniería'
      testimonio='El objetivo era enviar tres, "LOG", pero el ordenador se cayó después de las dos primeras' />
         <Testimonio
      nombre='Vinton Cerf'
      pais='Estados Unidos'
      imagen='Vint'
      cargo='	Informático teórico, ingeniero, profesor universitario y evangelista tecnológico'
      empresa='IEEE
      Academia Estadounidense de las Artes y las Ciencias
      Academia Nacional de Ingeniería
      Association for Computing Machinery
      Asociación Estadounidense para el Avance de la Ciencia
      Royal Society (desde 2016)
      Academia Nacional de Ciencias de los Estados Unidos'
      testimonio='Todavía hay mucha gente que ofrece contenidos por el mero placer de saber que la información
       puede resultar útil a otras personas". “En el futuro no se usará módem para acceder a internet' />
    </div>
  );
}

export default App;
