
import Link from 'next/link'
import '../TarjetaHistoriaHome/tarjetaHistoriaHome.css'
import { collection, deleteDoc } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import ModalVerPerfil from '../ModalVerPerfil/ModalVerPerfil';
import ModalEliminarSueño from '../ModalEliminarSueño/ModalEliminarSueño';
import ModalEditarSueño from '../ModalEditarSueño/ModalEditarSueño';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { useState } from 'react';
import FavoriteIcon from '@mui/icons-material/Favorite';




function TarjetaHistoriaHome ( {historia, text} ){
    const [heart, setHeart] = useState(false)
    return (
        <div className="tarjetaHistoria">
                <div>
            <Link href={`/detalle/${historia.id}`}>
            <button className='tarjetaHistoria__detalle'>Detalle</button>
            </Link>
                </div>
                <div className="heart">
                    
                    {
                        !heart ?
                        <div onClick={()=>setHeart(true)}>
                            <FavoriteBorderIcon style={{color:"white"}} />    
                         </div>
                        :
                        <div onClick={()=>setHeart(false)}>
                            <FavoriteIcon style={{color:"white"}} />
                        </div>

                    }
                </div>
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