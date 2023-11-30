import FondoDinamico from "../FondoDinamico/FondoDinamico"
import ModalCrearSueño from "../ModalCrearSueño/ModalCrearSueño"
import '../LayoutHome/layoutHome.css'
import FiltrosBusqueda from "../FiltrosBusqueda/FiltrosBusqueda"
import ModalPerfilResponsive from "../ModalPerfilResponsive/ModalPerfilResponsive"
import ModalFiltroResponsive from "../ModalFiltroResponsive/ModalFiltroResponsive"
import LayoutTarjetasHome from "../LayoutTarjetasHome/LayoutTarjetasHome"

const { default: Link } = require("next/link")
const { default: TarjetaEnlaceHome } = require("../TarjetaEnlaceHome/TarjetaEnlaceHome")
const { default: TarjetaHistoria } = require("../TarjetaHistoria/TarjetaHistoria")
const { default: TarjetaFiltro } = require("../TarjetaFiltro/TarjetaFiltro")

const LayoutHome = ()=>{
    return (
      <>
        <div className='container__home'> 
        <div className="container__filtroBusqueda">
          <FiltrosBusqueda />
        </div>
        <div className="container__modalResponsive">
          <ModalFiltroResponsive />
          <ModalPerfilResponsive />
        </div>
  <div className='home__tarjetas'>
  <ModalCrearSueño />
   <LayoutTarjetasHome />
  </div>
  <div className='home__user'>
    <div className="container__usuario">
    <div style={{display:"flex", gap:"10px", alignItems:"center", borderBottom:"1px solid white", paddingBottom:"15px"}}>
    <img alt= "imagen" alt={"imagen"} src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915526/tu%20historia/150_a8exmv.jpg'></img>
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

    </div>
      </>


    )
}

export default LayoutHome