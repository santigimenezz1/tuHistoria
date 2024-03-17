"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalVerPerfil/modalVerPerfil.css'
import AvatarPerfil from '../AvatarPerfil/AvatarPerfil';
import { TextField } from '@mui/material';
import BotonModalEditar from '../BotonModalEditar/BotonModalEditar';
import CloseIcon from '@mui/icons-material/Close';
import Boton from '../Boton/Boton';
import ContadorSueños from '../ContadorSueños/ContadorSueños';
import ModalEnviarMensaje from './ModalEnviarMensaje/ModalEnviarMensaje';
import { useContext } from 'react';
import { CreateContext } from '@/Context/context';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function ModalVerPerfil( {historia, data} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { usuarioOn } = useContext(CreateContext);


  console.log({historia})
  return (
    <div>
      <div onClick={()=>handleOpen()}>
      <div className='tarjetaHistoria__user'>
                <img alt= "imagen"  src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915526/tu%20historia/150_a8exmv.jpg'></img>
                <div className='tarjetaHistoria__user__info'>
                  {
                   historia && historia.user &&
                   <h1>{historia.user.usuarioOn.nombre} {historia.user.usuarioOn.apellido}</h1>
               
                  }
                <h5>Hace 2 horas</h5>
                </div>
            </div>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container__modalEditar'>
          <div onClick={()=>handleClose()} className='container__modalEditar__iconoClose'>
          <CloseIcon />
          </div>
          <div className='container__modalEditar__Perfil'>
            <img alt="imagen" src='https://res.cloudinary.com/dcf9eqqgt/image/upload/v1699915236/tu%20historia/premium_photo-1687832783320-35671afbf484_ogghp1.jpg'></img>
            <h1>Santiago gimenez</h1>
            <h3>Se unio el 26/3/2022</h3>
          </div>
          <div>
            <ContadorSueños contador={5} type={"sueño"} />
            <ContadorSueños contador={3} type={"favorito"} />
          </div>
          <ModalEnviarMensaje />
         
        </div>
       
      </Modal>
    </div>
  );
}