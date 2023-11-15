import Link from 'next/link'
import '../ContadorSueños/contadorSueños.css'
const ContadorSueños = ({contador, type})=>{
    return (
        <div className="contadorSuenios">
            {
                type === "sueño" ?
           <h1 className="contadorSuenios__text">Haz publicado <Link style={{textDecoration:"none"}} href={'/misSuenios'}> <span> {contador} sueños</span></Link>  desde que te uniste</h1>
           :
           <h1 className="contadorSuenios__text">Tenes guardados <Link style={{textDecoration:"none"}} href={'/favoritos'}><span> {contador} sueños</span></Link> en tu lista de favoritos</h1>
            }
        </div>
    )
}

export default ContadorSueños