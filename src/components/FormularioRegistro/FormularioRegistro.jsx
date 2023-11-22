 "use client"
import { useFormik } from 'formik'
import BotonEnviarFormulario from '../BotonEnviarFormulario/BotonEnviarFormulario'
import './formularioRegistro.css'
import Swal from 'sweetalert2'
import { auth, create, db } from '@/firebaseConfig'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import { addDoc, collection } from 'firebase/firestore'

const FormularioRegistro = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const [loading, setLoading] = useState(false);

    const { handleChange, handleSubmit, errors } = useFormik({
        initialValues: {
            nombre: "",
            email: "",
            password: ""
        },
        onSubmit: async (data) => {
            create()
            try {
                const res = await createUserWithEmailAndPassword(auth, data.email, data.password);
                // Assuming `addDoc` is a function to add a document to Firestore
                await addDoc(collection(db, "usuarios"), data);
                setLoading(true);
                setTimeout(() => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Bienvenido, contanos tu historia :)  ",
                        showConfirmButton: true,
                        timer: 3500,
                    });
                    handleClose();
                }, 3000);
            } catch (createError) {
                const errorCode = createError.code;

                if (errorCode === 'auth/email-already-in-use') {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Este correo ya está registrado!",
                        showConfirmButton: true,
                        timer: 4500,
                        customClass: {
                            container: "my-custom-alert", // Clase personalizada para la alerta
                            backdrop: "my-custom-backdrop", // Clase personalizada para el fondo de la alerta
                        },
                    });
                } else {
                    // Handle other errors if needed
                    console.error(createError.message);
                }
            }
        },
        validateOnChange: false
    });

    return (
        <div className="formularioIniciarSesion">
            <form onSubmit={handleSubmit} className='formulario__iniciarSesion'>
                <h1>Registrate</h1>
                <div className='inputs__formulario'>
                    <input onChange={handleChange} name='nombre' placeholder='Nombre'></input>
                    <input onChange={handleChange} name='email' placeholder='Email'></input>
                    <input onChange={handleChange} name='password' type='password' placeholder='Contraseña'></input>
                </div>
                <div className='formulario__info'>
                    <h4>La contraseña debe tener:</h4>
                    <h6>Al menos 8 caracteres</h6>
                    <h6>Al menos 1 letra </h6>
                    <h6>Al menos 1 numero</h6>
                    <h6>Al menos 1 caracter especial !@#</h6>
                </div>
                <BotonEnviarFormulario text={"Registrate"} />
            </form>
        </div>
    );
}

export default FormularioRegistro;
