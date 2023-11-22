 'use client'
import FormularioIniciarSesion from "@/components/FormularioIniciarSesion/FormularioIniciarSesion"
import FormularioRegistro from "@/components/FormularioRegistro/FormularioRegistro"
import "../loginUsuario/loginUsuario.css"
import FondoDinamico from "@/components/FondoDinamico/FondoDinamico"
import { useContext } from "react"
import { CreateContext } from "@/Context/context"
const LoginUsuario = ()=>{
    const {usuarioOn, setUsuarioOn} = useContext(CreateContext)

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