import EditIcon from '@mui/icons-material/Edit';
import '../BotonModalEditar/botonModalEditar.css'
import LogoutIcon from '@mui/icons-material/Logout';
const BotonModalEditar = ( {text} )=> {
    return (
        <button className={text === "editar" ? 'botonModalEditar' : 'botonModalEliminar'}>
            {
                text === "editar" ?
            <EditIcon style={{color:"white"}} />
            :
            <LogoutIcon style={{color:"white"}} />
            }
            {text}
        </button>
    )
}
export default BotonModalEditar