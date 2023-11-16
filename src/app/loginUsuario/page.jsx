import FormularioIniciarSesion from "@/components/FormularioIniciarSesion/FormularioIniciarSesion"
import FormularioRegistro from "@/components/FormularioRegistro/FormularioRegistro"
import "../loginUsuario/loginUsuario.css"
const LoginUsuario = ()=>{
    return (
        <div className="loginUsuario">
            <FormularioIniciarSesion />
            <FormularioRegistro />
        </div>
    )
}
export default LoginUsuario