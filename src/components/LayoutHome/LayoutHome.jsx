import FondoDinamico from "../FondoDinamico/FondoDinamico"
import ModalCrearSueño from "../ModalCrearSueño/ModalCrearSueño"
import '../LayoutHome/layoutHome.css'
import FiltrosBusqueda from "../FiltrosBusqueda/FiltrosBusqueda"

const { default: Link } = require("next/link")
const { default: TarjetaEnlaceHome } = require("../TarjetaEnlaceHome/TarjetaEnlaceHome")
const { default: TarjetaHistoria } = require("../TarjetaHistoria/TarjetaHistoria")
const { default: TarjetaFiltro } = require("../TarjetaFiltro/TarjetaFiltro")

const LayoutHome = ()=>{
    return (
        <div className='container__home'> 
        <div>
          <FiltrosBusqueda />
        </div>

  <div className='home__tarjetas'>
  <ModalCrearSueño />
    <TarjetaHistoria text={"En una noche sin luna, María notó una sombra oscura en la esquina de su habitación. Se acercó con temor y vio una figura que parecía moverse sola. Al encender la luz, la sombra desapareció. Desde entonces, cada noche, la sombra reaparece, acercándose lentamente En una noche sin luna, María notó una sombra oscura en la esquina de su habitación. Se acercó con temor y vio una figura que parecía moverse sola. Al encender la luz, la sombra desapareció."} />
    <TarjetaHistoria text={"Cada vez que Ana se miraba al espejo, veía un reflejo distorsionado de sí misma. Una noche, el reflejo tomó vida propia y salió del espejo. Ahora, Ana vive aterrada, mientras su duplicado la sigue en silencio, imitando cada movimiento."} />
    <TarjetaHistoria text={"En el viejo piano de la mansión abandonada, se escuchaban notas musicales misteriosas todas las noches. Un día, alguien decidió tocar esas melodías prohibidas. De repente, las sombras cobraron vida, bailando al ritmo de la música. Desde entonces, el piano suena solo en la oscuridad."} />
    <TarjetaHistoria text={"En el sótano de la casa, Laura encontró una puerta antigua. Al abrirla, entró en una habitación olvidada. En las paredes, fotografías de extraños que la miraban fijamente. Al cerrar la puerta, las fotos cobraron vida. Desde ese día, los rostros la observan desde cualquier esquina de su hogar."} />
  </div>
  <div className='home__user'>
    <div style={{display:"flex", gap:"10px", alignItems:"center", borderBottom:"1px solid white", paddingBottom:"15px"}}>
    <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915526/tu%20historia/150_a8exmv.jpg'></img>
    <h1>Santidev</h1>
    </div>
    <div style={{ width:"20vw",display:"flex", flexDirection:"column", borderBottom:"1px solid white", padding:"15px"}}>
      <Link href={'/perfil'}>
  <TarjetaEnlaceHome  text={"Mi Perfil"}/>
      </Link>
      <Link href={'/perfil/misSuenios'}>
  <TarjetaEnlaceHome text={"Mis sueños"} />
      </Link>
      <Link href={'perfil/favoritos'}>
  <TarjetaEnlaceHome text={"Mis favoritos"} />
      </Link>
      <Link href={'/mensajes'}>
  <TarjetaEnlaceHome text={"Mensajes"} />
      </Link>
      <Link href={'/perfil'}>
  <TarjetaEnlaceHome text={"Cerrar sesioón"} />
      </Link>
    </div>
  </div>
    </div> 


    )
}

export default LayoutHome