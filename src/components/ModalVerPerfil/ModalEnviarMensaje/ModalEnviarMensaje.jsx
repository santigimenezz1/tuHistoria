 "use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalEnviarMensaje/modalEnviarMensaje.css'
import { TextField, styled } from '@mui/material';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    backgroundColor: 'rgb(0, 0, 0)',
    borderRadius: '10px',
    boxShadow: 24,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    border:"1px solid white",
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
        borderColor: 'white',  // Color del borde cuando está enfocado
      },
    },
    '& .MuiInputLabel-root': {
      color: 'white',  // Color del texto de la etiqueta
    },
    '& .MuiInputBase-input': {
      color: 'white',  // Color del texto del campo de entrada
    },
  });
  

export default function ModalEnviarMensaje() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <button className='botonEnviarMensaje' onClick={handleOpen}>Enviar mensaje</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
          <StyledTextField
      multiline
      minRows={3}
      maxRows={6}
      fullWidth
      variant="outlined"
      placeholder='Escribe tu mensaje...'
    />          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2, display:"flex", justifyContent:"center" }}>
          <button className='botonEnviarMensaje' onClick={handleOpen}>Enviar</button>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}