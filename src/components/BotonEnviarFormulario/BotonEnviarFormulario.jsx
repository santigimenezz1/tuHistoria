const BotonEnviarFormulario = ( {text} )=>{
    return (
        <button style={{
           backgroundColor:"purple",
           color:"white",
           cursor:"pointer",
           padding:"7px",
           fontSize:"9px",
           borderRadius:"4px",
           border:"none",
           cursor:"pointer"
        }}>
            <h1>{text}</h1>
        </button>
    )
}
export default BotonEnviarFormulario