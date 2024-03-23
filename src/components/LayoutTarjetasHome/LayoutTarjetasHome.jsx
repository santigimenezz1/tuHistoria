 "use client"

import { db } from "@/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import TarjetaHistoriaHome from "../TarjetaHistoriaHome/TarjetaHistoriaHome";
import { CreateContext } from "@/Context/context";

const { default: TarjetaHistoria } = require("../TarjetaHistoria/TarjetaHistoria")

const LayoutTarjetasHome = ( {filtros, filtrosHome} )=>{
  const { historias, setHistorias } = useContext(CreateContext);
    const { copyHistorias, setCopyHistorias } = useContext(CreateContext);




    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, 'historias'), (historia) => {
        setHistorias(historia.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });

     



      return () => unsubscribe();
    }, []);


    return (
      <>
     
        {
          copyHistorias.length > 0 ?
          copyHistorias
            .filter((historia) => historia.publico === true && historia.date) // Filtrar historias públicas y asegurarse de que la propiedad date no sea null
            .sort((a, b) => (b.date && a.date) ? b.date.seconds - a.date.seconds : 0) // Ordenar por fecha más reciente si date existe, de lo contrario, mantener el orden actual
            .map((historia, index) => (
              <TarjetaHistoriaHome key={index} historia={historia} />
            ))
        
           :
          historias 
            .filter((historia) => historia.publico === true && historia.date) // Filtrar historias públicas y asegurarse de que la propiedad date no sea null
            .sort((a, b) => (b.date && a.date) ? b.date.seconds - a.date.seconds : 0) // Ordenar por fecha más reciente si date existe, de lo contrario, mantener el orden actual
            .map((historia, index) => (
              <TarjetaHistoriaHome key={index} historia={historia} />
            ))
        }
       
      </>
    );
    
}
export default LayoutTarjetasHome