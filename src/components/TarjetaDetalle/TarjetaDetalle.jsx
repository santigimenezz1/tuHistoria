 import ModalVerPerfil from '../ModalVerPerfil/ModalVerPerfil'
import '../TarjetaDetalle/tarjetaDetalle.css'
const TarjetaDetalle = ( {data} ) =>{
    return (
        <div className="tarjetaDetalle">
         <ModalVerPerfil />
         <div className='tarjetaDetalle__info'>
           {
            data &&
         <span>
            {data.mensaje.mensaje}
         </span>
           }
            
         </div>

        </div>
    )
}
export default TarjetaDetalle