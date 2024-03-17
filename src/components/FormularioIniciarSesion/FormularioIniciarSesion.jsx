 'use client'
import BotonEnviarFormulario from '../BotonEnviarFormulario/BotonEnviarFormulario'
import TarjetaGoogle from './TarjetaGoogle/TarjetaGoogle'
import '../FormularioIniciarSesion/formularioIniciarSesion.css'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { db, login } from '@/firebaseConfig'
import ModalRecuperarPassword from '../ModalRecuperarPassword/ModalRecuperarPassword'
import { createContext, useContext, useState } from 'react'
import { CreateContext } from '@/Context/context'
import { collection, getDoc, getDocs, query, where } from 'firebase/firestore'
import Loading from '../Loading/Loading'

const FormularioIniciarSesion = () => {
  const {usuarioOn, setUsuarioOn} = useContext(CreateContext)
  const [estadoLoading, setEstadoLoading] = useState(false)
  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    async onSubmit(data) {
      try {
        const resultado = await login(data);
        setEstadoLoading(true)
        if (resultado.user) {
          setTimeout(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "¡Bienvenido a TuHistoria.com!",
              showConfirmButton: true,
              timer: 3500,
            });
          }, 2000);
          setTimeout(() => {
            setEstadoLoading(false)
          }, 3000);
          const buscarUsuario = async (email) => {
            try {
              const ref = collection(db, "usuarios");
              const q = query(ref, where("email", "==", email));
              const querySnapshot = await getDocs(q);
              querySnapshot.forEach((doc) => {
                const data = doc.data();
                setUsuarioOn(data)
              });
            } catch (error) {
              console.error("Error al buscar usuarios:", error);
              // Maneja el error de manera apropiada, muestra una alerta o regístralo
            }
          };
          buscarUsuario(data.email)
        } 
      } catch (error) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Esta cuenta no existe",
            showConfirmButton: true,
            timer: 3500,
          });  
          // Handle the error appropriately, show an alert, or log it
      }
    },
    validateOnChange: false,
  });


  return (
    <div className="formularioIniciarSesion">
      <form onSubmit={handleSubmit} className="formulario__iniciarSesion">
        {
          estadoLoading &&
        <div className='loading__login'>
      <Loading />
        </div>
        }
        <h1>Ingresa con...</h1>
        <TarjetaGoogle />
        <div className="inputs__formulario">
          <input onChange={handleChange} name="email" placeholder="Email"></input>
          <input onChange={handleChange} name="password" type="password" placeholder="Contraseña"></input>
        </div>
        <BotonEnviarFormulario text={"Iniciar sesión"} />
      <ModalRecuperarPassword />
      </form>
    </div>
  );
};

export default FormularioIniciarSesion;
