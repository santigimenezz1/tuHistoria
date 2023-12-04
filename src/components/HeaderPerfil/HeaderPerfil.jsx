 "use client"
import { useContext } from 'react'
import AvatarPerfil from '../AvatarPerfil/AvatarPerfil'
import ContadorSueños from '../ContadorSueños/ContadorSueños'
import Email from '../Email/Email'
import ModalEditar from '../ModalEditar/ModalEditar'
import ModalEliminar from '../ModalEliminar/ModalEliminar'
import './headerPerfil.css'
import { CreateContext } from '@/Context/context'
const HeaderPerfil = ()=>{
    const {usuarioOn, setUsuarioOn} = useContext(CreateContext)

    console.log({usuarioOn})
    return (
        <div className='container__headerPerfil'>
        <div className="headerPerfil">
            <AvatarPerfil />
            <div className='headerPerfil__info'>
            <h1>{usuarioOn.nombre} {usuarioOn.apellido}</h1>
            <h5>Miembro desde el 10/5/2023</h5>
            </div>
        </div>

        <Email usuarioOn={usuarioOn} />

        <div className='container__contadorSueños'>
        <ContadorSueños contador={2} type={"sueño"} />
        <ContadorSueños contador={5} type={"favorito"} />
        </div>

        <div className='container__modales'>
        <ModalEditar  />
        <div>
        <ModalEliminar text={"Salir"} />
        </div>
        </div>

   

        </div>
        
    )
}
export default HeaderPerfil