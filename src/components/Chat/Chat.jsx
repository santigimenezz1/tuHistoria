import { addDoc, doc, getDoc, updateDoc } from "firebase/firestore";
import { db } from "@/firebaseConfig";
import { useFormik } from "formik";
import TarjetaMensaje from "@/app/mensajes/TarjetaMensaje/TarjetaMensaje";
import "../Chat/chat.css";

const Chat = ({ data, params }) => {
  const agregarComentario = async (text) => {
    const docRef = doc(db, "historias", params.id);
    const objeto = await getDoc(docRef);
    const data = objeto.data();
    const comentarios = data.comentarios || [];
    await updateDoc(docRef, { comentarios: [...comentarios, text] });
  };

  const { handleSubmit, handleChange, resetForm, values } = useFormik({
    initialValues: {
      comentario: "",
    },
    onSubmit: async (data) => {
      event.preventDefault();
      agregarComentario(data.comentario);
      resetForm(); // Reinicia los valores del formulario
    },
    validateOnChange: false,
  });

  return (
    <div className="chat">
      <div className="container__chat">
        {data &&
          data.comentarios.map((comentario, index) => (
            <TarjetaMensaje comentario={comentario} key={index} />
          ))}
      </div>
      <form onSubmit={handleSubmit} className="container__input">
        <div className="container__chat__input__input">
          <div className="inputEnviarMensaje">
            <input
              onChange={handleChange}
              value={values.comentario}
              name="comentario"
              placeholder="Escribe tu mensaje..."
              type="text"
            />
          </div>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Chat;
