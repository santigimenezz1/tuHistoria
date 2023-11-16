 import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria'
import '../[id]/detalle.css'
const Detalle = ()=>{
    return (
        <div className="detalleTarjeta">
            <div className='container__detalle'>
            <div className='detalleTarjeta__sueño'>
             <TarjetaHistoria text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur fugiat cum consectetur quae officia dicta ullam, incidunt quasi provident non nulla unde nisi laborum nobis, ad commodi? Quia, error placeat! Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor voluptatibus, alias corporis, laudantium est corrupti deserunt soluta repudiandae laboriosam veritatis atque. Eum, maiores placeat id sint illo odit repellat eaque?"} />
             </div>
            <div className='detalleTarjeta__ilustraciones'>
                <h1>Ilustraciones subidas por el autor del sueño</h1>
                <div className='detalleTarjeta__ilustraciones__fotos'>
                <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700076629/tu%20historia/fruit-1_ooyigx.webp'></img>
                <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700076629/tu%20historia/fruit-1_ooyigx.webp'></img>
                <img src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1700076629/tu%20historia/fruit-1_ooyigx.webp'></img>
                </div>
            </div>
            <div className='detalleTarjeta__input'>
                <input type='text'></input>
                <button>Enviar</button>
            </div>
            <div className='detalleTarjeta__tarjetaChat'>
                <div className='tarjetaChat'>
                    <span>klasjdjkasdjkaksjdajksdjkaskjdakjsdjkasdjkasdkj</span>
                </div>
                <div className='tarjetaChat'>
                    <span>klasjdjkasdjkaksjdajksdjkaskjdakjsdjkasdjkasdkj</span>
                </div>
                <div className='tarjetaChat'>
                    <span>klasjdjkasdjkaksjdajksdjkaskjdakjsdjkasdjkasdkj</span>
                </div>
                <div className='tarjetaChat'>
                    <span>klasjdjkasdjkaksjdajksdjkaskjdakjsdjkasdjkasdkj</span>
                </div>

            </div>
            </div>
        </div>
            
    )
}
export default Detalle 