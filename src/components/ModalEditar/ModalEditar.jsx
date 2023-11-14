 "use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalEditar/modalEditar.css'
import AvatarPerfil from '../AvatarPerfil/AvatarPerfil';
import { TextField } from '@mui/material';
import BotonModalEditar from '../BotonModalEditar/BotonModalEditar';
import CloseIcon from '@mui/icons-material/Close';
import Boton from '../Boton/Boton';

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

export default function ModalEditar() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div onClick={()=>handleOpen()}>
      <BotonModalEditar text={"editar"} />
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
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Editar perfil 
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <AvatarPerfil />
          </Typography>
          <form className='formulario__modalEditar'>
            <h5>E-mail</h5>
          <input className='input__file' type='file'></input>
          <h5>Nombre</h5>
          <input className='input__text' type='text' placeholder='Santidev'></input>
          <div className='container__buttonsForm'>
            <Boton text={"cancelar"} />
            <Boton text={"editar"}  />
          </div>
          </form>
        </div>
       
      </Modal>
    </div>
  );
}