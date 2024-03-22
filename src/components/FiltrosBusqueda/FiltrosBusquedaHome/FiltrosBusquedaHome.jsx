import TarjetaFiltro from '@/components/TarjetaFiltro/TarjetaFiltro'
import '../../FiltrosBusqueda/FiltrosBusquedaHome/filtrosBusquedaHome.css'
import TarjetaFiltroHome from '@/components/TarjetaFiltro/TarjetaFiltroHome/TarjetaFiltroHome'
import { useContext, useState } from 'react';
import { CreateContext } from '@/Context/context';

const FiltrosBusquedaHome = ( {filtrosHome, setFiltrosHome} )=>{

    const { historias, setHistorias } = useContext(CreateContext);

   
    const agregarFiltroHome = (text) =>{
        if(!filtrosHome.includes(text)){
            setFiltrosHome([...filtrosHome, text])
        }
    }

    const arregloFiltrado = (filtrosHome, historias) => {
        const arr = historias.filter((historia) => {
          // Verificar si alguna categoria de la historia está incluida en filtros
          return  historia.categorias.some((categoria) => filtrosHome.includes(categoria));
        });
        setHistorias(arr) ;
      };


  

 
      console.log({historias})
      console.log({filtrosHome})

    return (
        <div className='filtroBusqueda'>
        <h1>Filtros</h1>
        <div className='filtroBusqueda__tarjetas'>
        <TarjetaFiltroHome text={"Caía"} agregarFiltroHome={agregarFiltroHome}/>
        <TarjetaFiltroHome text={"Me perseguían"}agregarFiltroHome={agregarFiltroHome}/>
        <TarjetaFiltroHome text={"Me moría"}agregarFiltroHome={agregarFiltroHome}/>
        <TarjetaFiltroHome text={"Con un fantasma"}agregarFiltroHome={agregarFiltroHome}/>
        <TarjetaFiltroHome text={"Ovinis"}agregarFiltroHome={agregarFiltroHome}/>
        <TarjetaFiltroHome text={"Extraterrestes"}agregarFiltroHome={agregarFiltroHome}/>
        <TarjetaFiltroHome text={"Volaba"}agregarFiltroHome={agregarFiltroHome}/>
        <TarjetaFiltroHome text={"Era otra persona"}agregarFiltroHome={agregarFiltroHome}/>
        <TarjetaFiltroHome text={"Me peleaba"}agregarFiltroHome={agregarFiltroHome} />
        </div>
        <button onClick={()=>arregloFiltrado(filtrosHome, historias)}>Aplicar</button>
        </div>
    )
}

export default FiltrosBusquedaHome