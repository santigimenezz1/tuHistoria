
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
import { CreateContext } from '@/Context/context'
import { useContext } from 'react'




function TarjetaHistoria ( {historia, text, index} ){
    const { usuarioOn } = useContext(CreateContext);
    
    
    return (
        <div className="tarjetaHistoria">
            <button className='tarjetaHistoria__detalle'>Detalle</button>
            <ModalVerPerfil historia={historia} />
            
            <div className='tarjetaHistoria__botonClose'>
                <div className='tarjetaHistoria__buttons'>
                <ModalEliminarSueño historia={historia} />
                <ModalEditarSueño historia={historia}   />
                </div>
            </div>
                <div className='tarjetaHistoria__mensaje'>
                    <span>{historia.mensaje.mensaje}</span>
                 
                </div>
        </div>
    )
}
export default TarjetaHistoria