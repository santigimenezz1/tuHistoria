 'use client'
import { createContext, useState } from "react"

export const CreateContext = createContext()

const ContextoGlobal = ( {children} )=>{
    const [usuarioOn, setUsuarioOn] = useState({})
    const [historias, setHistorias] = useState([])
    const [category, setCategory] = useState([])
    const [filtros, setFiltros] = useState([])

    let data = {
     historias,
     setHistorias,
     usuarioOn,
     setUsuarioOn,
     filtros,
     setFiltros
    }

    return (
        <CreateContext.Provider value={data}>
            {children}
        </CreateContext.Provider>
        )
}

export default ContextoGlobal