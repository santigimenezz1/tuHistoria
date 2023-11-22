 'use client'
import BotonEnviarFormulario from '../BotonEnviarFormulario/BotonEnviarFormulario'
import TarjetaGoogle from './TarjetaGoogle/TarjetaGoogle'
import '../FormularioIniciarSesion/formularioIniciarSesion.css'
import { useFormik } from 'formik'
import Swal from 'sweetalert2'
import { login } from '@/firebaseConfig'

const FormularioIniciarSesion = () => {
  const { handleChange, handleSubmit } = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    async onSubmit(data) {
      try {
        const resultado = await login(data);
        if (resultado.user) {
          // Instead of storing in localStorage, you might want to consider more secure options
          setTimeout(() => {
            Swal.fire({
              position: "center",
              icon: "success",
              title: "¡Bienvenido a Cascanueces saludable!",
              showConfirmButton: true,
              timer: 3500,
            });
          }, 2000);
        } 
      } catch (error) {
        Swal.fire({
            position: "center",
            icon: "error",
            title: "Esta cuenta no existe",
            showConfirmButton: true,
            timer: 3500,
          });        // Handle the error appropriately, show an alert, or log it
      }
    },
    validateOnChange: false,
  });

  return (
    <div className="formularioIniciarSesion">
      <form onSubmit={handleSubmit} className="formulario__iniciarSesion">
        <h1>Ingresa con...</h1>
        <TarjetaGoogle />
        <div className="inputs__formulario">
          <input onChange={handleChange} name="email" placeholder="Email"></input>
          <input onChange={handleChange} name="password" type="password" placeholder="Contraseña"></input>
        </div>
        <BotonEnviarFormulario text={"Iniciar sesión"} />
      </form>
    </div>
  );
};

export default FormularioIniciarSesion;
