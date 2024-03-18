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
    if (usuarioOn.email) {
      const q = query(collection(db, 'usuarios'), where("email", "==", usuarioOn.email));
      const unsubscribe = onSnapshot(q, (snapshot) => {
        setHistorias(snapshot.docs[0]?.data().historias || []);
      });
      return () => unsubscribe();
    }
  }, [usuarioOn.email]);


  console.log(historias)
  return (
    <div className='misSuenios'>
      <div className='misSuenios__text'>
        <h1>Tus sueños</h1>
        <h2>Cantidad de sueños: {historias.length}</h2>
      </div>
      <div className='misSuenios__container__tarjetas'>
      {
        historias.length > 0 ?
        historias.map((historia, index)=>(
          <TarjetaHistoria key={index} historia={historia} />
          ))
          :
          <h1 className='titulo__sinTarjetas'>Todavia no agregaste ninguna historia :(</h1>
      }
      </div>
    </div>
  );
        }
      

export default MisSuenios;
