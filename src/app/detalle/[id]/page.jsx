 "use client"
import FondoDinamico from "@/components/FondoDinamico/FondoDinamico"
import TarjetaDetalle from "@/components/TarjetaDetalle/TarjetaDetalle"
import '../[id]/detalle.css'
import TarjetaIlustraciones from "@/components/TarjetaIlustraciones/TarjetaIlustraciones"
import Chat from "@/components/Chat/Chat"
import { db } from "@/firebaseConfig"
import { doc, getDoc, onSnapshot } from "firebase/firestore"
import { useEffect, useState } from "react"

async function obtenerDetalle(params) {
    const docRef = doc(db, "historias", params.id);
    const objeto = await getDoc(docRef);
    const data = objeto.data();
    return data;
  }
  
  function Detalle({ params }) {
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