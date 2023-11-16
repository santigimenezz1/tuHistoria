 import BotonEnviarFormulario from '../BotonEnviarFormulario/BotonEnviarFormulario'
import './formularioRegistro.css'
const FormularioRegistro = ()=>{
    return (
        <div className="formularioIniciarSesion">
            <form className='formulario__iniciarSesion'>
                <h1>Registrate</h1>
                <div className='inputs__formulario'>
                    <input placeholder='Nombre'></input>
                    <input placeholder='Email'></input>
                    <input type='password' placeholder='Contraseña'></input>
                    <input type='password' placeholder='Repetir contraseña'></input>
                </div>
                <div className='formulario__info'>
                <h4>La contraeña debe tener:</h4>
                <h6>Al menos 8 caracteres</h6>
                <h6>Al menos 1 letra </h6>
                <h6>Al menos 1 numero</h6>
                <h6>Al menos 1 caracter especial !@#</h6>
                </div>
                <BotonEnviarFormulario text={"Registrate"} />
            </form>
        </div>
    )
}
export default FormularioRegistro