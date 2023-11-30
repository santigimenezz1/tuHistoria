"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalPerfilResponsive/modalPerfilResponsive.css'
import FiltrosBusqueda from '../FiltrosBusqueda/FiltrosBusqueda';
import TarjetaEnlaceHome from '../TarjetaEnlaceHome/TarjetaEnlaceHome';
import ModalCrearSueño from '../ModalCrearSueño/ModalCrearSueño';
import Link from 'next/link';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'black',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  border:"none",
  borderRadius: "10px"

};

export default function ModalPerfilResponsive() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={()=>handleOpen()} className='home__user'>
    <div style={{display:"flex", cursor:"pointer", gap:"10px", alignItems:"center", borderBottom:"1px solid white", paddingBottom:"15px"}}>
    <img alt= "imagen" alt={"imagen"} src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915526/tu%20historia/150_a8exmv.jpg'></img>
    <h1>Santidev</h1>
    </div>
    </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container__modalPerfil'>
      
  <div className='home__userResponsive'>
    <div style={{display:"flex", gap:"10px", alignItems:"center", borderBottom:"1px solid white", paddingBottom:"15px"}}>
    <img alt= "imagen" alt={"imagen"} src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915526/tu%20historia/150_a8exmv.jpg'></img>
    <h1>Santidev</h1>
    </div>
    <div style={{ width:"20vw",display:"flex", flexDirection:"column", borderBottom:"1px solid white", padding:"15px"}}>
      <Link href={'/perfil'}>
  <TarjetaEnlaceHome  text={"Mi Perfil"}/>
      </Link>
      <Link href={'/perfil/misSuenios'}>
  <TarjetaEnlaceHome text={"Mis sueños"} />
      </Link>
      <Link href={'perfil/favoritos'}>
  <TarjetaEnlaceHome text={"Mis favoritos"} />
      </Link>
      <Link href={'/mensajes'}>
  <TarjetaEnlaceHome text={"Mensajes"} />
      </Link>
      <Link href={'/perfil'}>
  <TarjetaEnlaceHome text={"Cerrar sesioón"} />
      </Link>
    </div>
    </div>

        </div>
      </Modal>
    </div>
  );
}