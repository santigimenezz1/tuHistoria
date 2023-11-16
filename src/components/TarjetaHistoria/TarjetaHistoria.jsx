 import Link from 'next/link'
import '../TarjetaHistoria/tarjetaHistoria.css'
import BotonClose from './BotonClose/BotonClose'
import BotonEditar from './BotonEditar/BotonEditar'
import ModalVerPerfil from '../ModalVerPerfil/ModalVerPerfil'
const TarjetaHistoria = ( {text} )=>{
    return (
        <div className="tarjetaHistoria">
            <div className='tarjetaHistoria__perfil'>
                <ModalVerPerfil />
            </div>
            <div className='tarjetaHistoria__botonClose'>
                <div className='tarjetaHistoria__buttons'>
                <BotonClose />
                <BotonEditar />
                </div>
            </div>
                <div className='tarjetaHistoria__mensaje'>
                    <span>{text}</span>

                </div>

        </div>
    )
}
export default TarjetaHistoria