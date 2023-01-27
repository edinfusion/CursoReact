import './App.css';
import imagenl from './images/logo.png'
import Boton from './components/Booton'
import Pantalla from './components/Pantalla';
import BotonClear from './components/BotonClear';
import Logo from './components/Logo'
import { useState } from 'react';
import { evaluate } from 'mathjs';

function App() {

  const [input, setInput] = useState('');
  const [operador, setOperador] = useState('')
  const [punto, setPunto] = useState(true)
  const [resultado, setResultado] = useState(true)
  const agregarInput = val => {
    if (!resultado && !isNaN(val)) {
      setResultado(true)
      if (!isNaN(val) && operador === '') {
        setInput(val);
      }
    } else if (resultado) {
      //agrega operador
      if (isNaN(val) && val !== '.' & val !== '=' && operador === '' && punto === true && input !== '') {
        setOperador(val);
        setInput(input + val);
        console.log("1")
      }
      //agrega numeros
      else if (!isNaN(val) && operador === '') {
        setInput(input + val);
        if (!punto) {
          setPunto(true);
        }
        console.log("2")
      }
      else if (val === '.' && punto && input !== '') {
        setPunto(!punto);
        setInput(input + val);
        console.log("punto if ", punto)
      }
      else if (!isNaN(val) && operador !== '') {
        setInput(input + val);
        setOperador('');
        console.log("3")
      }
      else {
        alert("ingrese una operacion aritmetica valida")
      }

    }
  };

  const clearInput = () => {
    setInput('');
    setOperador('');
  };

  const calcularResultado = () => {
    if (input && resultado) {
      setInput(evaluate(input));
      setOperador('');
      setResultado(false);
    } else {
      alert("DEBE INGRESAR UNA NUEVA ENTRADA PARA OBTENER EL RESULTADO")
    }
  };

  return (
    <div className="App">
      <Logo imagen = {imagenl}/>
      <div className='contenedor-calc'>
        <Pantalla input={input} />
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClic={clearInput}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
