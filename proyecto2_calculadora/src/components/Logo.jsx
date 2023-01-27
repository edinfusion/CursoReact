import React from "react";
import '../styles/Logo.css'


function Logo({ imagen }) {
    return (
        <div className='logo-contenedor'>
            <img src={imagen}
                className='logo-emv'
                alt='Logo de emv' />
        </div>
    )
}

export default Logo;