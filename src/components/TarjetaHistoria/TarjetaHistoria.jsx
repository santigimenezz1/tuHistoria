 import '../TarjetaHistoria/tarjetaHistoria.css'
import BotonClose from './BotonClose/BotonClose'
import BotonEditar from './BotonEditar/BotonEditar'
const TarjetaHistoria = ()=>{
    return (
        <div className="tarjetaHistoria">
            <div className='tarjetaHistoria__user'>
                <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915526/tu%20historia/150_a8exmv.jpg'></img>
                <div className='tarjetaHistoria__user__info'>
                <h4>Santidev</h4>
                <h5>Hace 6 horas</h5>
                </div>
            </div>
            <div className='tarjetaHistoria__botonClose'>
                <div className='tarjetaHistoria__buttons'>
                <BotonClose />
                <BotonEditar />
                </div>
            </div>
                <div className='tarjetaHistoria__mensaje'>
                    <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, nostrum? Officiis ipsam nisi maxime cupiditate quisquam assumenda nam mollitia perspiciatis quis saepe sapiente, fuga ex recusandae repellendus nihil, vitae minus.
                    Quo adipisci vero doloremque atque, maxime corporis dolor autem iure qui suscipit modi neque laudantium aut quas nemo! Quos reiciendis placeat ut delectus non veniam ex eligendi possimus ea ipsa.
                    </span>

                </div>

        </div>
    )
}
export default TarjetaHistoria