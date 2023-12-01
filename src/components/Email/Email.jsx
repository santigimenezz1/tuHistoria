 import '../Email/email.css'
const Email = ( {usuarioOn} )=>{
    return (
        <div className='headerPerfil__email'>
        <h1>Email: {usuarioOn.email}</h1>
        </div>
    )
}

export default Email