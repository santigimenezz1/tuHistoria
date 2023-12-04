 "use client"

import { db } from "@/firebaseConfig";
import { collection, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";
import TarjetaHistoriaHome from "../TarjetaHistoriaHome/TarjetaHistoriaHome";

const { default: TarjetaHistoria } = require("../TarjetaHistoria/TarjetaHistoria")

const LayoutTarjetasHome = ()=>{
    const [historias, setHistorias] = useState([]); // Estado para almacenar las historias

    useEffect(() => {
      const unsubscribe = onSnapshot(collection(db, 'historias'), (historia) => {
        setHistorias(historia.docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      });

      return () => unsubscribe();
    }, []);

    return (
        <>
        {
        historias.filter((historia)=>historia.publico === true).map((historia, index) => (
          <TarjetaHistoriaHome  key={index} historia={historia} />
        ))
        }
        </>
    )
}
export default LayoutTarjetasHome