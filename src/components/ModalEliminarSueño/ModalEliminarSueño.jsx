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
import BotonClose from '../TarjetaHistoria/BotonClose/BotonClose';



export default function ModalEliminarSueño( {text} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div onClick={()=>handleOpen()}>
      <BotonClose />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container__modalEliminar'>
          <div onClick={()=>handleClose()} className='container__modalEditar__iconoClose'>
          <CloseIcon />
          </div>
          <Typography style={{textAlign:"center", fontSize:"22px"}} id="modal-modal-description" sx={{ mt: 2 }}>
            {"¿Seguro quieres eliminar este sueño?"}
          </Typography>
          <div className='container__buttonsForm'>
            <Boton text={"cancelar"} />
            <Boton text={"eliminar"}  />
          </div>
        </div>
       
      </Modal>
    </div>
  );
}