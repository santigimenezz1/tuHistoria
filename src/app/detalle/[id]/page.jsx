 import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria'
import '../[id]/detalle.css'
import TarjetaDetalle from '@/components/TarjetaDetalle/TarjetaDetalle'
import TarjetaIlustraciones from '@/components/TarjetaIlustraciones/TarjetaIlustraciones'
import Chat from '@/components/Chat/Chat'
import BotonVolver from '@/components/BotonVolver/BotonVolver'
import Link from 'next/link'
const Detalle = ()=>{
    return (
        <div className='container__detalle'>
            <div className='botonVolver__detalle'>
                <Link href={'/'}>
            <BotonVolver />
                </Link>
            </div>
            <TarjetaDetalle />
                <TarjetaIlustraciones />
            <Chat />
        </div>
            
    )
}
export default Detalle 