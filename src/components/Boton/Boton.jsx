import '../Boton/boton.css'
const Boton = ({text})=>{
    return (
        <div>
            <button className={text !== "cancelar" ? "boton" : "boton-cancelar" }>{text}</button>
        </div>
    )
}
export default Boton