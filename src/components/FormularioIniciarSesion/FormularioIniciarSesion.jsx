import BotonEnviarFormulario from '../BotonEnviarFormulario/BotonEnviarFormulario'
import TarjetaGoogle from './TarjetaGoogle/TarjetaGoogle'
import '../FormularioIniciarSesion/formularioIniciarSesion.css'
const FormularioIniciarSesion = ()=>{
    return (
        <div className="formularioIniciarSesion">
            <form className='formulario__iniciarSesion'>
                <h1>Ingresa con...</h1>
                <TarjetaGoogle />
                <div className='inputs__formulario'>
                    <input placeholder='Email'></input>
                    <input type='password' placeholder='Contraseña'></input>
                </div>
         
                <BotonEnviarFormulario text={"Iniciar sesión"} />
            </form>
        </div>
    )
}
export default FormularioIniciarSesion