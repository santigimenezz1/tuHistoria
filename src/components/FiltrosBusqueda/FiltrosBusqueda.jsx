const { default: TarjetaFiltro } = require("../TarjetaFiltro/TarjetaFiltro")
import '../FiltrosBusqueda/filtrosBusqueda.css'

const FiltrosBusqueda = ()=>{
    return (
        <div className='filtroBusqueda'>
        <h1>Filtros</h1>
        <div className='filtroBusqueda__tarjetas'>
        <TarjetaFiltro text={"Caía"} />
        <TarjetaFiltro text={"Me perseguían"} />
        <TarjetaFiltro text={"Me moría"} />
        <TarjetaFiltro text={"Con un fantasma"} />
        <TarjetaFiltro text={"Ovinis"} />
        <TarjetaFiltro text={"Extraterrestes"} />
        <TarjetaFiltro text={"Volaba"} />
        <TarjetaFiltro text={"Era otra persona"} />
        <TarjetaFiltro text={"Me peleaba"} />
        </div>
        <button>Aplicar</button>
        </div>
    )
}

export default FiltrosBusqueda