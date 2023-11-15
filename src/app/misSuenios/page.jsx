 import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria'
import '../misSuenios/misSuenios.css'
import FondoDinamico from '@/components/FondoDinamico/FondoDinamico'
const MisSuenios = ()=>{
    return (
        <div className='misSuenios'>
               <div className='fondoDinamico'>
                    <FondoDinamico />
                </div>
            <div className='misSuenios__text'>
            <h1>Tus sueños</h1>
            <h2>Cantidad de sueños: 10</h2>
            </div>
            <div className='misSuenios__tarjetas'>
            <TarjetaHistoria />
            <TarjetaHistoria />
            <TarjetaHistoria />
            <TarjetaHistoria />
            <TarjetaHistoria />
            </div>
        </div>
    )
}

export default MisSuenios