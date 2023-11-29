  "use client"
 import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria'
import '../[id]/detalle.css'
import TarjetaDetalle from '@/components/TarjetaDetalle/TarjetaDetalle'
import TarjetaIlustraciones from '@/components/TarjetaIlustraciones/TarjetaIlustraciones'
import Chat from '@/components/Chat/Chat'
import BotonVolver from '@/components/BotonVolver/BotonVolver'
import Link from 'next/link'
import { addDoc, collection, doc, getDoc, query, where } from 'firebase/firestore'
import { db } from '@/firebaseConfig'
import { useEffect, useState } from 'react'

 async function Detalle ( {params} ){
  const [estado, setEstado] = useState(null);
  const id = await params.id

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Obtener la referencia al documento
        const historiaRef = doc(db, 'historias', id);

        // Obtener el documento
        const historiaDoc = await getDoc(historiaRef);

        if (historiaDoc.exists()) {
          // Actualizar el estado con los datos del documento
          setEstado(
            {...historiaDoc.data(), id: historiaDoc.id}
          );
        } else {
          console.log('No se encontró ningún documento con el ID proporcionado.');
        }
      } catch (error) {
        console.error('Error al obtener datos:', error);
      }
    };
    fetchData();
  }, [params.id]);

 

  console.log({ estado });
    return (
        <div className='container__detalle'>
            <div className='botonVolver__detalle'>
                <Link href={'/'}>
            <BotonVolver />
                </Link>
            </div>
            <TarjetaDetalle estado={estado} />
                <TarjetaIlustraciones />
            <Chat id={id} />
        </div>
            
    )
}
export default Detalle 