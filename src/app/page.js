import Image from 'next/image'
import styles from './page.module.css'
import ModalCrearSueño from '@/components/ModalCrearSueño/ModalCrearSueño'
import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria'
import TarjetaEnlaceHome from '@/components/TarjetaEnlaceHome/TarjetaEnlaceHome'
import FondoDinamico from '@/components/FondoDinamico/FondoDinamico'
export default function Home() {
  return (
    <div className='container__home'>
  <div className='home__tarjetas'>
    <div className='fondoDinamico'>
    <FondoDinamico />
    </div>
  <ModalCrearSueño />
    <TarjetaHistoria />
    <TarjetaHistoria />
    <TarjetaHistoria />
    <TarjetaHistoria />
    <TarjetaHistoria />

  </div>
  <div className='home__user'>
    <div style={{display:"flex", gap:"10px", alignItems:"center", borderBottom:"1px solid white", paddingBottom:"15px"}}>
    <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915526/tu%20historia/150_a8exmv.jpg'></img>
    <h1>Santidev</h1>
    </div>
    <div style={{display:"flex", flexDirection:"column", borderBottom:"1px solid white", padding:"15px"}}>
  <TarjetaEnlaceHome  text={"Mi Perfil"}/>
  <TarjetaEnlaceHome text={"Mis sueños"} />
  <TarjetaEnlaceHome text={"Mis favoritos"} />
  <TarjetaEnlaceHome text={"Cerrar sesioón"} />
    </div>
  </div>
    </div>
  )
}
