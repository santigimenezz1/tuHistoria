 "use client"
import InputEnviarMensaje from "@/app/mensajes/InputEnviarMensaje/InputEnviarMensaje"
import TarjetaMensaje from "@/app/mensajes/TarjetaMensaje/TarjetaMensaje"
import '../Chat/chat.css'
import { addDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "@/firebaseConfig"
import { useState } from "react"

const Chat = ( {id} ) =>{
  const enviarMensaje = async () => {
    const docRef = doc(db, "historias", id);

    try {
      const sendMesage = await updateDoc(docRef, { comentarios: [ "hola", "hola santiago, como estas?"] });
      console.log("Mensaje enviado correctamente:", sendMesage);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };


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
                      <InputEnviarMensaje params={params} />
                        </div>
                      <button onClick={()=>enviarMensaje()}>Enviar</button>
                    </div>
        </div>
    )
}

export default Chat