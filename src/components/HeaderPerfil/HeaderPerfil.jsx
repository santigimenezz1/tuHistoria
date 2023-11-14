import AvatarPerfil from '../AvatarPerfil/AvatarPerfil'
import ContadorSueños from '../ContadorSueños/ContadorSueños'
import Email from '../Email/Email'
import ModalEditar from '../ModalEditar/ModalEditar'
import ModalEliminar from '../ModalEliminar/ModalEliminar'
import './headerPerfil.css'
const HeaderPerfil = ()=>{
    return (
        <div className='container__headerPerfil'>
        <div className="headerPerfil">
            <AvatarPerfil />
            <div className='headerPerfil__info'>
            <h1>Santidev</h1>
            <h5>Miembro desde el 10/5/2023</h5>
            </div>
        </div>

        <Email />

        <div>
        <ContadorSueños contador={2} type={"sueño"} />
        <ContadorSueños contador={5} type={"favorito"} />
        </div>

        <div className='container__modales'>
        <ModalEditar  />
        <ModalEliminar />
        </div>

   

        </div>
        
    )
}
export default HeaderPerfil