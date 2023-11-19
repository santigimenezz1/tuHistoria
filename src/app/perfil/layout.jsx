import TarjetaEnlaceHome from '@/components/TarjetaEnlaceHome/TarjetaEnlaceHome'
import '../../app/perfil/layout.css'
import FondoDinamico from '@/components/FondoDinamico/FondoDinamico'
import BotonEnlacePerfil from '@/components/BotonEnlacePerfil/BotonEnlacePerfil'
import Link from 'next/link'
import BotonVolver from '@/components/BotonVolver/BotonVolver'
const LayoutPerfil = ( {children} )=>{
    return (
        <div className="LayoutPerfil">
            <div className='fondoDinamico'>
                <FondoDinamico />
            </div>
            <div className='enlaces'>
                <div className='botonVolver'>
                    <Link href={'/'}>
                <BotonVolver />
                    </Link>
                </div>
                <Link href={'/perfil'}>
            <BotonEnlacePerfil text={"Mi perfil"} />
                </Link>
                <Link href={'/perfil/misSuenios'}>
            <BotonEnlacePerfil text={"Mis sueños"} /> 
                </Link>
                <Link href={'/perfil/favoritos'}>
            <BotonEnlacePerfil text={"Mis favoritos"} />
                </Link>
                <Link href={'/mensajes'}>
            <BotonEnlacePerfil text={"Mensajes"} />
                </Link>
            
            </div>
            <main className='main'>
            {children}
            </main>
        </div>
    )
}
export default LayoutPerfil