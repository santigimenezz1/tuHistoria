import React from 'react';
import '../TarjetaMensaje/tarjetaMensaje.css';

const TarjetaMensaje = ({ comentario }) => {
    // Verificar la estructura del objeto user

    return (
        <div className="tarjetaMensaje">
            <div className='tarjetaMensaje__perfil'>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915236/tu%20historia/premium_photo-1687832783320-35671afbf484_ogghp1.jpg' alt="Imagen"></img>
            <div className='tarjetaMensaje__perfil__nombre'>
              
            </div>

            </div>
            <div className='tarjetaMensaje__texto'>
            </div>
        </div>
    );
};

export default TarjetaMensaje;
