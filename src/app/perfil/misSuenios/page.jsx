 "use client"
import { useState, useEffect, useContext } from 'react';
import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria';
import './misSuenios.css';
import { collection, onSnapshot, query, where } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import { CreateContext } from '@/Context/context';

const MisSuenios = () => {
  const [historias, setHistorias] = useState([]);
  const { usuarioOn } = useContext(CreateContext);

  useEffect(() => {
    // Verifica que usuarioOn.email tenga un valor antes de realizar la consulta
    if (usuarioOn.email) {
      // Crea la consulta q con el filtro por email
      const q = query(collection(db, 'usuarios'), where("email", "==", usuarioOn.email));

      // Establece el suscriptor para obtener las historias en tiempo real
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setHistorias(snapshot.docs[0]?.data().historias || []);
      });

      // Limpia el suscriptor cuando el componente se desmonta
      return () => unsubscribe();
    }
  }, [usuarioOn.email]);

  console.log( {historias} );
 
  return (
    <div className='misSuenios'>
      <div className='misSuenios__text'>
        <h1>Tus sueños</h1>
        <h2>Cantidad de sueños: {historias.length}</h2>
      </div>
      {
        historias.map((historia, index)=>(
          <TarjetaHistoria key={index} historia={historia} />
        ))
      }
    </div>
  );
        }
      

export default MisSuenios;
