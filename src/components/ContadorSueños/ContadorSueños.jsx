import '../ContadorSueños/contadorSueños.css'
const ContadorSueños = ({contador, type})=>{
    return (
        <div className="contadorSuenios">
            {
                type === "sueño" ?
           <h1 className="contadorSuenios__text">Haz publicado <span> {contador} sueños</span>  desde que te uniste</h1>
           :
           <h1 className="contadorSuenios__text">Tenes guardados<span> {contador} sueños</span> en tu lista de favoritos</h1>
            }
        </div>
    )
}

export default ContadorSueños