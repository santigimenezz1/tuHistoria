 "use client"
import TarjetaMensaje from "@/app/mensajes/TarjetaMensaje/TarjetaMensaje"
import '../Chat/chat.css'
import { addDoc, doc, updateDoc } from "firebase/firestore"
import { db } from "@/firebaseConfig"
import { useState } from "react"
import { useFormik } from "formik"

const Chat = ( {data, params} ) =>{
  const enviarMensaje = async () => {
    const docRef = doc(db, "historias", params.id);

    try {
      const sendMesage = await updateDoc(docRef, { comentarios: [ "hola", "hola santiago, como estas?"] });
      console.log("Mensaje enviado correctamente:", sendMesage);
    } catch (error) {
      console.error("Error al enviar el mensaje:", error);
    }
  };

  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      comentario: "",
    },
    onSubmit: (data) => {
      console.log({data})

    },
    validateOnChange: false      
})


    return (
        <div className="chat">
                    <div className='container__chat'>
                      {
                        data &&
                        data.comentarios.map((comentario, index)=>(
                          <TarjetaMensaje comentario={comentario} key={index} />
                        ))
                      }
                    </div>
                    <form onSubmit={handleSubmit} className='container__input'>
                        <div className='container__chat__input__input'>
                        <div className="inputEnviarMensaje" >
                             <input onChange={handleChange} name="comentario" placeholder='Escribe tu mensaje...' type="text"></input>
                          </div>
                        </div>
                      <button>Enviar</button>
                    </form>
        </div>
    )
}

export default Chat