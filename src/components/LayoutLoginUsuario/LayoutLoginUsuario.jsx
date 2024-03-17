'use client'
import "../LayoutLoginUsuario/layoutLoginUsuario.css"
import { useContext } from "react"
import { CreateContext } from "@/Context/context"
import FormularioIniciarSesion from "../FormularioIniciarSesion/FormularioIniciarSesion"
import FormularioRegistro from "../FormularioRegistro/FormularioRegistro"
import FondoDinamico from "../FondoDinamico/FondoDinamico"
const LayoutLoginUsuario = ()=>{
    const {usuarioOn} = useContext(CreateContext)
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
export default LayoutLoginUsuario