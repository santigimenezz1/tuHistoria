 import '../TarjetaUsuarioMensaje/tarjetaUsuarioMensaje.css'
const TarjetaUsuarioMensaje = ({imagen, nombre, fecha})=>{
    return (
        <div className="TarjetaUsuarioMensaje">
            <img src={imagen}></img>
            <div className='tarjetaUsuarioMensaje__info'>
            <h1>{nombre}</h1>
            <h3>{fecha}</h3>
            </div>
        </div>
    )
}
export default TarjetaUsuarioMensaje