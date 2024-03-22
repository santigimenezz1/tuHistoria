 import BotonVolver from '@/components/BotonVolver/BotonVolver'
import '../mensajes/mensajes.css'
import TarjetaMensaje from './TarjetaMensaje/TarjetaMensaje'
import TarjetaUsuarioMensaje from './TarjetaUsuarioMensaje/TarjetaUsuarioMensaje'
import Link from 'next/link'
import FondoDinamico from '@/components/FondoDinamico/FondoDinamico'
const Mensaje = ()=>{

    return (
        <div className="container__mensaje">
              <div className='fondoDinamico'>
        <FondoDinamico />
    </div>
            <div className='container__mensaje__botonVolver'>
                <Link href={'/'}>
            <BotonVolver />
                </Link>
            </div>
            <div className='container__mensaje__chat'>

                <div className='container__usuarios__chat'>
                  <TarjetaUsuarioMensaje imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915526/tu%20historia/150_a8exmv.jpg"} nombre={"Santiago gimenez"} fecha={"20/01/2023"} />
                  <TarjetaUsuarioMensaje imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700085802/tu%20historia/FOTOS-CARNET-GAVA-2_lndngw.jpg"}  nombre={"Alicia gomez"} fecha={"20/01/2023"}/>
                  <TarjetaUsuarioMensaje imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700085829/tu%20historia/images_uinebp.jpg"} nombre={"Mariana lopez"} fecha={"20/01/2023"} />
                  <TarjetaUsuarioMensaje imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700085838/tu%20historia/fotografia-tamano-carnet_tdg6tk.jpg"}  nombre={"Florencia real"} fecha={"20/01/2023"}/>
                  <TarjetaUsuarioMensaje imagen={"https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700085841/tu%20historia/retrato-corporativo-formal-de-una-empresaria_tx4jdc.jpg"} nombre={"Agustina perez"} fecha={"20/01/2023"} />
                </div>
                <div className='container__chat'>
                    <div className='container__chat__header'>
                        <img alt= "imagen"   src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915526/tu%20historia/150_a8exmv.jpg'></img>
                        <h1>Santiago gimenez</h1>
                    </div>
                    <div className='container__chat__contenedorMensajes'>
                        <TarjetaMensaje text={"Hola como estas?"} />
                        <TarjetaMensaje text={"Me gustó mucho la interpretacion de tu sueño!"} />
                        <TarjetaMensaje text={"Muchas gracias Santiago!"} />
                        <TarjetaMensaje text={"De nada, nos vemos!"} />
                        <TarjetaMensaje text={"De nada, nos vemos!"} />
                    </div>
                    <div className='container__chat__input'>
                    <input className='chat__input' type='text' placeholder='Escribe tu mensaje...'></input>
                        <div>
                        </div>
                      <button>Enviar</button>
                    </div>

                </div>
             </div>
        </div>
    )
}
export default Mensaje 