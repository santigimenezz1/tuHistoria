
import FondoDinamico from "@/components/FondoDinamico/FondoDinamico"
import TarjetaDetalle from "@/components/TarjetaDetalle/TarjetaDetalle"
import '../[id]/detalle.css'
import TarjetaIlustraciones from "@/components/TarjetaIlustraciones/TarjetaIlustraciones"
import Chat from "@/components/Chat/Chat"
import { db } from "@/firebaseConfig"
import { doc, getDoc } from "firebase/firestore"

async function obtenerDetalle (params) {
     const docRef =  doc(db, "historias", params.id)
     const objeto = await getDoc(docRef)
     const data = objeto.data()
     return data
 }

async function Detalle ( {params} ){
    
    let data = await obtenerDetalle(params)

    return (
        <div className="detalle">
        <div className='fondoDinamico'>
                <FondoDinamico />
            </div>
        <div className="container__detalle">
            <div className="detalle__tarjetaDetalle">
        <TarjetaDetalle data={data} />
            </div>
            <div className="detalle__tarjetaIlustraciones">
                <TarjetaIlustraciones />
            </div>
            <div className="detalle__chat">
                <Chat data={data} params={params}/>
            </div>
        </div>
        </div>
    )
}
export default Detalle 