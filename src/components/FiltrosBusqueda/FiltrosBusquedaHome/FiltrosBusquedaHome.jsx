import TarjetaFiltro from '@/components/TarjetaFiltro/TarjetaFiltro'
import '../../FiltrosBusqueda/FiltrosBusquedaHome/filtrosBusquedaHome.css'
import TarjetaFiltroHome from '@/components/TarjetaFiltro/TarjetaFiltroHome/TarjetaFiltroHome'
import { useContext, useState } from 'react';
import { CreateContext } from '@/Context/context';

const FiltrosBusquedaHome = ()=>{

    const { historias, setHistorias } = useContext(CreateContext);
    const { copyHistorias, setCopyHistorias } = useContext(CreateContext);
    const {filtrosHome, setFiltrosHome} = useContext(CreateContext)





   
    const agregarFiltroHome = (text) => {
        if (!filtrosHome.includes(text)) {
            // Si el texto no está en el arreglo, lo agregamos
            setFiltrosHome([...filtrosHome, text]);
        } 
    };
    
    

    const test = () => {
        setCopyHistorias("estado cambiado")
    }

    const arregloFiltrado = (filtrosHome, historias) => {
        const arr = historias.filter((historia) => {
          // Verificar si alguna categoria de la historia está incluida en filtros
          return  historia.categorias.some((categoria) => filtrosHome.includes(categoria));
        });
        setCopyHistorias(arr) ;
      };


  

 
      console.log({filtrosHome})
      console.log({copyHistorias})

    return (
        <div className='filtroBusqueda'>
        <h1>Filtros</h1>
        <div className='filtroBusqueda__tarjetas'>
        <TarjetaFiltroHome text={"Caía"} agregarFiltroHome={agregarFiltroHome} /> 
        <TarjetaFiltroHome text={"Me perseguían"}agregarFiltroHome={agregarFiltroHome} />
        <TarjetaFiltroHome text={"Me moría"}agregarFiltroHome={agregarFiltroHome} />
        <TarjetaFiltroHome text={"Con un fantasma"}agregarFiltroHome={agregarFiltroHome} />
        <TarjetaFiltroHome text={"Ovinis"}agregarFiltroHome={agregarFiltroHome} />
        <TarjetaFiltroHome text={"Extraterrestes"}agregarFiltroHome={agregarFiltroHome} />
        <TarjetaFiltroHome text={"Volaba"}agregarFiltroHome={agregarFiltroHome} />
        <TarjetaFiltroHome text={"Era otra persona"}agregarFiltroHome={agregarFiltroHome} />
        <TarjetaFiltroHome text={"Me peleaba"}agregarFiltroHome={agregarFiltroHome}  />
        </div>
        <div className='filtroBusqueda__botones'>
        <button onClick={()=>arregloFiltrado(filtrosHome, historias)}>Aplicar</button>
        <button onClick={()=>setCopyHistorias([])}>Reset</button>
        </div>

        </div>
    )
}

export default FiltrosBusquedaHome