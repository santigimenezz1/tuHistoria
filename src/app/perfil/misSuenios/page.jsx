 import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria'
import './misSuenios.css'
import FondoDinamico from '@/components/FondoDinamico/FondoDinamico'
import ModalEditarSueño from '@/components/ModalEditarSueño/ModalEditarSueño'
const MisSuenios = ( {children} )=>{
    return (
        <div className='misSuenios'>
               
            <div className='misSuenios__text'>
            <h1>Tus sueños</h1>
            <h2>Cantidad de sueños: 10</h2>
            </div>
            <div className='misSuenios__tarjetas'>
            <TarjetaHistoria text={"En una noche sin luna, María notó una sombra oscura en la esquina de su habitación. Se acercó con temor y vio una figura que parecía moverse sola. Al encender la luz, la sombra desapareció. Desde entonces, cada noche, la sombra reaparece, acercándose lentamente."} />
            <TarjetaHistoria text={"Cada vez que Ana se miraba al espejo, veía un reflejo distorsionado de sí misma. Una noche, el reflejo tomó vida propia y salió del espejo. Ahora, Ana vive aterrada, mientras su duplicado la sigue en silencio, imitando cada movimiento."} />
            <TarjetaHistoria text={"En el viejo piano de la mansión abandonada, se escuchaban notas musicales misteriosas todas las noches. Un día, alguien decidió tocar esas melodías prohibidas. De repente, las sombras cobraron vida, bailando al ritmo de la música. Desde entonces, el piano suena solo en la oscuridad."} />
            <TarjetaHistoria text={"En el sótano de la casa, Laura encontró una puerta antigua. Al abrirla, entró en una habitación olvidada. En las paredes, fotografías de extraños que la miraban fijamente. Al cerrar la puerta, las fotos cobraron vida. Desde ese día, los rostros la observan desde cualquier esquina de su hogar."} />
            </div>
            
        </div>
    )
}

export default MisSuenios