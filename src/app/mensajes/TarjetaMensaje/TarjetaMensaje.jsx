import React from 'react';
import '../TarjetaMensaje/tarjetaMensaje.css';

const TarjetaMensaje = ({ comentario }) => {
    // Verificar la estructura del objeto user

    return (
        <div className="tarjetaMensaje">
            <div className='tarjetaMensaje__perfil'>
            <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915236/tu%20historia/premium_photo-1687832783320-35671afbf484_ogghp1.jpg' alt="Imagen"></img>
            <div className='tarjetaMensaje__perfil__nombre'>
                {
                    comentario &&
                    <h1>{comentario.user.nombre} {comentario.user.apellido}</h1>
                }
            </div>

            </div>
            <div className='tarjetaMensaje__texto'>
                {
                    comentario &&
                <h1>{comentario.texto}</h1>
                }
            </div>
        </div>
    );
};

export default TarjetaMensaje;
