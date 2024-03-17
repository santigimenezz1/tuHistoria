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
import { db } from '@/firebaseConfig';
import { deleteDoc, doc } from 'firebase/firestore';
import Swal from 'sweetalert2';




export default function ModalEliminarSueño( { historia, text} ) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const eliminarHistoria = (historiaId)=>{
    const docRef = doc(db, "historias", historiaId)
    deleteDoc(docRef)
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Historia eliminada ! ",
      showConfirmButton: true,
      timer: 3500,
    });
    handleClose()
}

 
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
            <div onClick={()=> handleClose()}>
            <Boton text={"cancelar"} />
            </div>
            <div onClick={()=>eliminarHistoria(historia.id)}>
            <Boton text={"eliminar"}  />
            </div>
          </div>
        </div>
       
      </Modal>
    </div>
  );
}