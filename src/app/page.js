import Image from 'next/image'
import styles from './page.module.css'
import ModalCrearSueño from '@/components/ModalCrearSueño/ModalCrearSueño'
import TarjetaHistoria from '@/components/TarjetaHistoria/TarjetaHistoria'
import TarjetaEnlaceHome from '@/components/TarjetaEnlaceHome/TarjetaEnlaceHome'
import FondoDinamico from '@/components/FondoDinamico/FondoDinamico'
import Link from 'next/link'
import TarjetaFiltro from '@/components/TarjetaFiltro/TarjetaFiltro'
import LayoutHome from '@/components/LayoutHome/LayoutHome'
import ModalVerPerfil from '@/components/ModalVerPerfil/ModalVerPerfil'
export default function Home() {
  return (
    <>
    <LayoutHome />
    </>
  )
}
