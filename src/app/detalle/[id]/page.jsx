 "use client"
import FondoDinamico from "@/components/FondoDinamico/FondoDinamico"
import TarjetaDetalle from "@/components/TarjetaDetalle/TarjetaDetalle"
import '../[id]/detalle.css'
import TarjetaIlustraciones from "@/components/TarjetaIlustraciones/TarjetaIlustraciones"
import Chat from "@/components/Chat/Chat"
import { db } from "@/firebaseConfig"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { useContext, useEffect, useState } from "react"
import BotonVolver from "@/components/BotonVolver/BotonVolver"
import Link from "next/link"
import ContextoGlobal, { CreateContext } from "@/Context/context"

async function obtenerDetalle(params) {
    const docRef = doc(db, "historias", params.id);
    const objeto = await getDoc(docRef);
    const data = objeto.data();
    return data;
  }
  
  function Detalle({ params }) {
    const {usuarioOn} = useContext(CreateContext)
    const [data, setData] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        let fetchedData = await obtenerDetalle(params);
        setData(fetchedData);
      };
      fetchData();
      const docRef = doc(db, "historias", params.id);
      const unsubscribe = onSnapshot(docRef, (snapshot) => {
        const updatedData = snapshot.data();
        setData(updatedData);
      });
  
      return () => unsubscribe();
    }, [params.id]);





 console.log({data})
    return (
        <div className="detalle">
        <div className='fondoDinamico'>
                <FondoDinamico />
            </div>
            <div className="detalle__botonVolver">
                <Link href={'/'}>
            <BotonVolver />
                </Link>
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