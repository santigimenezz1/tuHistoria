import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria'
import '../misSuenios/misSuenios.css'
const Favoritos = ()=>{
    return (
        <div className='misSuenios'>
            <div className='misSuenios__text'>
            <h1>Tus Favoritos</h1>
            <h2>Cantidad de favoritos: 4</h2>
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

export default Favoritos