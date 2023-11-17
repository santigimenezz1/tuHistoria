import FormularioIniciarSesion from "@/components/FormularioIniciarSesion/FormularioIniciarSesion"
import FormularioRegistro from "@/components/FormularioRegistro/FormularioRegistro"
import "../loginUsuario/loginUsuario.css"
import FondoDinamico from "@/components/FondoDinamico/FondoDinamico"
const LoginUsuario = ()=>{
    return (
        <div className="loginUsuario">
            <div className='fondoDinamico'>
              <FondoDinamico />
            </div>
            <FormularioIniciarSesion />
            <FormularioRegistro />
        </div>
    )
}
export default LoginUsuario