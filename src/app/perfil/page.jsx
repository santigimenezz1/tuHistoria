import HeaderPerfil from '@/components/HeaderPerfil/HeaderPerfil'
import '../perfil/perfil.css'
import FondoDinamico from '@/components/FondoDinamico/FondoDinamico'

const Perfil = () => {
    return (
        <div className="perfil">
            <>
                <div className='fondoDinamico'>
                    <FondoDinamico />
                </div>
                <HeaderPerfil />
            </>
        </div>
    )
}
export default Perfil