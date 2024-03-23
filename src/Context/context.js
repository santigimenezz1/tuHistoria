 'use client'
import { createContext, useState } from "react"

export const CreateContext = createContext()

const ContextoGlobal = ( {children} )=>{
    const [copyHistorias, setCopyHistorias] = useState([])
    const [usuarioOn, setUsuarioOn] = useState({})
    const [historias, setHistorias] = useState([])
    const [category, setCategory] = useState([])
    const [filtros, setFiltros] = useState([])
    const [filtrosHome, setFiltrosHome] = useState([])



    let data = {
     historias,
     setHistorias,
     usuarioOn,
     setUsuarioOn,
     filtros,
     setFiltros,
     copyHistorias,
     setCopyHistorias,
     filtrosHome,
     setFiltrosHome
    }

    return (
        <CreateContext.Provider value={data}>
            {children}
        </CreateContext.Provider>
        )
}

export default ContextoGlobal