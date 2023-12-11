 'use client'
import { createContext, useState } from "react"

export const CreateContext = createContext()

const ContextoGlobal = ( {children} )=>{
    const [usuarioOn, setUsuarioOn] = useState({})
    const [category, setCategory] = useState([])

    let data = {
     usuarioOn,
     setUsuarioOn
    }

    return (
        <CreateContext.Provider value={data}>
            {children}
        </CreateContext.Provider>
        )
}

export default ContextoGlobal