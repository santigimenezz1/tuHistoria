"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalCrearSueño/modalCrearSueño.css'
import AvatarPerfil from '../AvatarPerfil/AvatarPerfil';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField, styled } from '@mui/material';
import BotonModalEditar from '../BotonModalEditar/BotonModalEditar';
import CloseIcon from '@mui/icons-material/Close';
import Boton from '../Boton/Boton';
import BotonCrearCuenta from '../BotonCrearTarea/BotonCrearTarea';

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

const StyledTextField = styled(TextField)({
    '& .MuiOutlinedInput-root': {
      border: '1px solid white',  // Color del borde
      '& fieldset': {
        borderColor: 'white',  // Color del borde cuando no está enfocado
      },
      '&:hover fieldset': {
        borderColor: 'white',  // Color del borde al pasar el ratón
      },
      '&.Mui-focused fieldset': {
        borderColor: 'purple',  // Color del borde cuando está enfocado
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',  // Color del texto de la etiqueta
    },
    '& .MuiInputBase-input': {
      color: 'white',  // Color del texto del campo de entrada
    },
  });
  

export default function ModalCrearSueño() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  return (
    <div>
      <div onClick={()=>handleOpen()}>
      <BotonCrearCuenta />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className='container__modalCrearSueño'>
          <div onClick={()=>handleClose()} className='container__modalEditar__iconoClose'>
          <CloseIcon />
          </div>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            ¿Qué soñaste?
          </Typography>
       
          <form className='formulario__modalEditar'>
            <h5>Soñé que...</h5>
            <StyledTextField
      multiline
      minRows={3}
      maxRows={6}
      fullWidth
      variant="outlined"
    />
 <FormControl>
  <FormLabel id="demo-radio-buttons-group-label">Quieres que sea..</FormLabel>
  <RadioGroup
    aria-labelledby="demo-radio-buttons-group-label"
    defaultValue="Público"
    name="radio-buttons-group"
  >
    <FormControlLabel value="female" control={<Radio />} label="Público" />
    <FormControlLabel value="male" control={<Radio />} label="Privado" />
  </RadioGroup>
</FormControl>
          <div className='container__buttonsForm'>
            <Boton text={"cancelar"} />
            <Boton text={"Enviar"}  />
          </div>
          </form>
        </div>
       
      </Modal>
    </div>
  );
}