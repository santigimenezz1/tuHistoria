
 import Link from 'next/link'
import '../TarjetaHistoria/tarjetaHistoria.css'
import BotonClose from './BotonClose/BotonClose'
import BotonEditar from './BotonEditar/BotonEditar'
import ModalVerPerfil from '../ModalVerPerfil/ModalVerPerfil'
import ModalEditarSueño from '../ModalEditarSueño/ModalEditarSueño'
import ModalEliminarSueño from '../ModalEliminarSueño/ModalEliminarSueño'
import { collection, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';




function TarjetaHistoria ( {historia, text} ){
    
    console.log({historia})
    return (
        <div className="tarjetaHistoria">
            <Link href={`/detalle/${historia.id}`}>
            <button className='tarjetaHistoria__detalle'>Detalle</button>
            </Link>
            <div className='tarjetaHistoria__perfil'>
                <ModalVerPerfil />
            </div>
            <div className='tarjetaHistoria__botonClose'>
                <div className='tarjetaHistoria__buttons'>
                <ModalEliminarSueño historia={historia} />
                <ModalEditarSueño historia={historia}   />
                </div>
            </div>
                <div className='tarjetaHistoria__mensaje'>
                    
                  {
                       historia &&
                           <span>{historia.mensaje.mensaje}</span>
                       }
                </div>

        </div>
    )
}
export default TarjetaHistoria