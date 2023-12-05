
import Link from 'next/link'
import '../TarjetaHistoriaHome/tarjetaHistoriaHome.css'
import { collection, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ModalVerPerfil from '../ModalVerPerfil/ModalVerPerfil';
import ModalEliminarSueño from '../ModalEliminarSueño/ModalEliminarSueño';
import ModalEditarSueño from '../ModalEditarSueño/ModalEditarSueño';




function TarjetaHistoriaHome ( {historia, text} ){
    
    return (
        <div className="tarjetaHistoria">
            <Link href={`/detalle/${historia.id}`}>
            <button className='tarjetaHistoria__detalle'>Detalle</button>
            </Link>
            <div className='tarjetaHistoria__perfil'>
                <ModalVerPerfil historia={historia} />
            </div>
            <div className='tarjetaHistoria__botonClose'>
               
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
export default TarjetaHistoriaHome