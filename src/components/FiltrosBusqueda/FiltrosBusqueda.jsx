const { default: TarjetaFiltro } = require("../TarjetaFiltro/TarjetaFiltro")
import '../FiltrosBusqueda/filtrosBusqueda.css'

const FiltrosBusqueda = ( {setFiltros, filtros, agregarFiltro} )=>{


    return (
        <div className='filtroBusqueda'>
        <h1>Filtros</h1>
        <div className='filtroBusqueda__tarjetas'>
        <TarjetaFiltro text={"Caía"}  setFiltros={setFiltros}  filtros={filtros} agregarFiltro={agregarFiltro}/>
        <TarjetaFiltro text={"Me perseguían"} setFiltros={setFiltros}  filtros={filtros} agregarFiltro={agregarFiltro}/>
        <TarjetaFiltro text={"Me moría"}  setFiltros={setFiltros} filtros={filtros} agregarFiltro={agregarFiltro}/>
        <TarjetaFiltro text={"Con un fantasma"}  setFiltros={setFiltros} filtros={filtros} agregarFiltro={agregarFiltro}/>
        <TarjetaFiltro text={"Ovinis"}  setFiltros={setFiltros} filtros={filtros} agregarFiltro={agregarFiltro}/>
        <TarjetaFiltro text={"Extraterrestes"}  setFiltros={setFiltros} filtros={filtros} agregarFiltro={agregarFiltro}/>
        <TarjetaFiltro text={"Volaba"}  setFiltros={setFiltros} filtros={filtros} agregarFiltro={agregarFiltro}/>
        <TarjetaFiltro text={"Era otra persona"}  setFiltros={setFiltros} filtros={filtros} agregarFiltro={agregarFiltro}/>
        <TarjetaFiltro text={"Me peleaba"}  setFiltros={setFiltros} filtros={filtros} agregarFiltro={agregarFiltro} />
        </div>
        <button onClick={()=>console.log({filtros})}>Aplicar</button>
        </div>
    )
}

export default FiltrosBusqueda