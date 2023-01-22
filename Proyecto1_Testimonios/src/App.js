import './App.css';
import { data } from './objects/testimonios.js';
import Testimonio from './components/Testimonio.jsx';

function App() {
  return (
    <div className="App"> {/*a este aplicar flexbox o grid*/ }
      <div className='titulo-principal'>
        <h1>Testimonios del curso</h1>
      </div>
      <div className='contenedor-principal'>
        <Testimonio
          nombre={data[0].nombre}
          pais={data[0].pais}
          imagen={data[0].imagen}
          cargo={data[0].cargo}
          empresa={data[0].empresa}
          testimonio={data[0].testimonio}
        />
        <Testimonio
          nombre = {data[1].nombre}
          pais = {data[1].pais}
          imagen = {data[1].imagen}
          cargo = {data[1].cargo}
          empresa = {data[1].empresa}
          testimonio = {data[1].testimonio}
        />
        <Testimonio
          nombre = {data[2].nombre}
          pais = {data[2].pais}
          imagen = {data[2].imagen}
          cargo = {data[2].cargo}
          empresa = {data[2].empresa}
          testimonio = {data[2].testimonio}
        />
      </div>
    </div>
  );
}

export default App;
