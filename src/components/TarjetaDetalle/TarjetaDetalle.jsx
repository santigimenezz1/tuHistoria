 import ModalVerPerfil from '../ModalVerPerfil/ModalVerPerfil'
import '../TarjetaDetalle/tarjetaDetalle.css'
const TarjetaDetalle = ( {estado} ) =>{
    return (
        <div className="tarjetaDetalle">
         <ModalVerPerfil />
         <div className='tarjetaDetalle__info'>
           {
            estado &&
         <span>
            {estado.mensaje.mensaje}
         </span>
           }
            
         </div>

        </div>
    )
}
export default TarjetaDetalle