import React from "react"; // Importamos React
import '../styles/Testimonio.css'; // Importamos el CSS

//un punto indica buscar en la misma carpeta
//dos puntos suben de nivel y buscan en la carpeta padre
//componentes funcionales
function Testimonio(props) {
    return (
        <div className='contenedor-testimonio'>
            <div className="contenedor-imagen">
                <img className='imagentest'
                    src={require(`../images/avatar${props.imagen}.png`)}
                    alt='foto avatar' />
            </div>
            <div className='contenedortexto'>
                <p className='nombre-testimonio'>
                    <strong>{props.nombre}</strong> en {props.pais}</p>
                <p className='cargo-testimonio'>{props.cargo} en <strong>{props.empresa}</strong></p>
                <p className='texto-testimonio'>{props.testimonio}</p>
            </div>
        </div>
    );
}

export default Testimonio;