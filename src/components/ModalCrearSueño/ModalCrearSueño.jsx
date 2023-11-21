 "use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalCrearSueño/modalCrearSueño.css';
import AvatarPerfil from '../AvatarPerfil/AvatarPerfil';
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  styled,
} from '@mui/material';
import BotonModalEditar from '../BotonModalEditar/BotonModalEditar';
import CloseIcon from '@mui/icons-material/Close';
import Boton from '../Boton/Boton';
import BotonCrearCuenta from '../BotonCrearTarea/BotonCrearTarea';
import TarjetaFiltro from '../TarjetaFiltro/TarjetaFiltro';
import SelectRadio from './SelectRadio/SelectRadio';



const StyledTextField = styled(TextField)({
  '& .MuiOutlinedInput-root': {
    border: '1px solid white',
    '& fieldset': {
      borderColor: 'white',
    },
    '&:hover fieldset': {
      borderColor: 'white',
    },
    '&.Mui-focused fieldset': {
      borderColor: 'white',
    },
  },
  '& .MuiInputLabel-root': {
    color: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
});

export default function ModalCrearSueño() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <div onClick={() => handleOpen()}>
        <BotonCrearCuenta />
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <div className="container__modalCrearSueño">
          <div onClick={() => handleClose()} className="container__modalEditar__iconoClose">
            <CloseIcon />
          </div>
          <Typography id="modal-modal-title" variant="h5" component="h2">
            ¿Qué soñaste...?
          </Typography>

          <form className="formulario__modalEditar">
            <StyledTextField
              multiline
              minRows={5}
              maxRows={8}
              fullWidth
              variant="outlined"
              placeholder="Soñé que..."
            />
            <FormControl>
              <h3>Elige alguna categoría</h3>
              <div className="tarjetas__filtro">
                <TarjetaFiltro text={"Caía"} />
                <TarjetaFiltro text={"Volaba"} />
                <TarjetaFiltro text={"Me perseguían"} />
                <TarjetaFiltro text={"Era otra persona"} />
                <TarjetaFiltro text={"Peleaba"} />
                <TarjetaFiltro text={"Veía un muerto"} />
              </div>
              <FormLabel id="demo-radio-buttons-group-label">Quieres que sea..</FormLabel>
              <SelectRadio />
            </FormControl>
            <div className="container__buttonsForm">
              <Boton text={"cancelar"} />
              <Boton text={"Enviar"} />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
