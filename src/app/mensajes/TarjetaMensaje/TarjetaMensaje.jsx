 import '../TarjetaMensaje/tarjetaMensaje.css'
const TarjetaMensaje = ( {comentario, text} )=>{
    return (
        <div className="tarjetaMensaje">
        <img alt={"imagen"} src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915236/tu%20historia/premium_photo-1687832783320-35671afbf484_ogghp1.jpg'></img>
        <span>{comentario}</span>
        </div>
    )
}
export default TarjetaMensaje
