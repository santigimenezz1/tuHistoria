import InputEnviarMensaje from "@/app/mensajes/InputEnviarMensaje/InputEnviarMensaje"
import TarjetaMensaje from "@/app/mensajes/TarjetaMensaje/TarjetaMensaje"
import '../Chat/chat.css'

const Chat = () =>{
    return (
        <div className="chat">
                    <div className='container__chat'>
                        <TarjetaMensaje text={"Hola como estas?"} />
                        <TarjetaMensaje text={"Me gustó mucho la interpretacion de tu sueño!"} />
                        <TarjetaMensaje text={"Muchas gracias Santiago!"} />
                        <TarjetaMensaje text={"De nada, nos vemos!"} />
                    </div>
                    <div className='container__input'>
                        <div className='container__chat__input__input'>
                      <InputEnviarMensaje />
                        </div>
                      <button>Enviar</button>
                    </div>
        </div>
    )
}

export default Chat