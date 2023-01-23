import './App.css';
import logoem from './images/logo.png';
import Boton from './components/Boton.jsx'
import Contador from './components/Contador'
import { useState } from 'react';

function App() {

  const [numClics, setNumClics] = useState(0); /*valor inicial entre parentesis*/


  const manejarClic = () => {
    console.log("Clic");
    setNumClics(numClics+1)
  };

  const reiniciarContador = () => {
    console.log("Reiniciar", numClics)
    setNumClics(0)
  };

  return (
    <div className="App">
      <div className='logo'>
        <img
        className='logoclick'
        src={logoem}
        alt='Logo de app'/>
      </div>
      <div className='contenedor-principal'>
        <Contador numClics={numClics}/>
        <Boton
        texto='Clic'
        esBotonDeClic={true}
        manejarClic={manejarClic}
        />
        <Boton
        texto='Reiniciar'
        esBotonDeClic={false}
        manejarClic={reiniciarContador}
        />
      </div>
    </div>
  );
}

export default App;
