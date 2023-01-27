import React from "react";
import '../styles/Boton.css'

function Boton(props){
    const esOperador = valor => {
        return isNaN(valor) && (valor !== '.') && (valor !== '=')   /* isNaN es una funcion que valida una cadena para saber si no es numero */
    }
    return (
        <div className={`boton-contenedor ${esOperador(props.children) ? 'operador':''}`.trimEnd()}
            onClick={() => props.manejarClic(props.children)}>{/*cuando ocurra un clik se va a llamar la funcion que viene en el parametro(no esta en este componente) */}
            {props.children}{/*esta propiedad children es para usar componente con etiqueta de cierre*/ }
        </div>
    )
}
export default Boton;