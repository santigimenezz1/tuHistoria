"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalEliminar/modalEliminar.css'
import AvatarPerfil from '../AvatarPerfil/AvatarPerfil';
import { TextField } from '@mui/material';
import BotonModalEditar from '../BotonModalEditar/BotonModalEditar';
import CloseIcon from '@mui/icons-material/Close';
import Boton from '../Boton/Boton';
import { useContext } from 'react';
import { CreateContext } from '@/Context/context';
import Link from 'next/link';

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

export default function ModalEliminar( {text} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const {usuarioOn, setUsuarioOn} = useContext(CreateContext)

  return (
    <div>
      <div onClick={()=>handleOpen()}>
      <BotonModalEditar text={"Salir"} />
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
          <Typography style={{textAlign:"center", fontSize:"22px"}} id="modal-modal-description" sx={{ mt: 2 }}>
            {"¿Quieres cerrar tu sesión?"}
          </Typography>
          <div className='container__buttonsForm'>
            <div onClick={()=>handleClose()}>
            <Boton text={"cancelar"} />
            </div>
            <Link href={'/'} onClick={()=>setUsuarioOn({})}>
            <Boton text={"Cerrar"}  />
            </Link>
          </div>
        </div>
       
      </Modal>
    </div>
  );
}