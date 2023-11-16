 import Link from 'next/link'
import '../TarjetaHistoria/tarjetaHistoria.css'
import BotonClose from './BotonClose/BotonClose'
import BotonEditar from './BotonEditar/BotonEditar'
import ModalVerPerfil from '../ModalVerPerfil/ModalVerPerfil'
import ModalEditarSueño from '../ModalEditarSueño/ModalEditarSueño'
import ModalEliminarSueño from '../ModalEliminarSueño/ModalEliminarSueño'
const TarjetaHistoria = ( {text} )=>{
    return (
        <div className="tarjetaHistoria">
            <div className='tarjetaHistoria__perfil'>
                <ModalVerPerfil />
            </div>
            <div className='tarjetaHistoria__botonClose'>
                <div className='tarjetaHistoria__buttons'>
                <ModalEliminarSueño />
                <ModalEditarSueño />
                </div>
            </div>
                <div className='tarjetaHistoria__mensaje'>
                    <span>{text}</span>

                </div>

        </div>
    )
}
export default TarjetaHistoria