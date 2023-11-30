'use client'
import { useState, useEffect } from 'react'; // Importa useState y useEffect
import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria';
import './favoritos.css';
import FondoDinamico from '@/components/FondoDinamico/FondoDinamico';
import ModalEditarSueño from '@/components/ModalEditarSueño/ModalEditarSueño';
import { collection, getDocs, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

const Favoritos = ({ children }) => {
  const [historias, setHistorias] = useState([]); // Estado para almacenar las historias

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, 'historias'), (snapshot) => {
      // Actualiza el estado con los datos en tiempo real
      setHistorias(snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
    });

    // Limpia el suscriptor cuando el componente se desmonta
    return () => unsubscribe();
  }, []); // El segundo parámetro vacío significa que este efecto se ejecutará solo una vez al montar el componente

  return (
    <div className='misSuenios'>
      <div className='misSuenios__text'>
        <h1>Tus sueños</h1>
        <h2>Cantidad de sueños: {historias.length}</h2>
      </div>
      <div className='misSuenios__tarjetas'>
        {historias.map((historia, index) => (
          <TarjetaHistoria key={index} historia={historia} />
        ))}
      </div>
    </div>
  );
};

export default Favoritos;
