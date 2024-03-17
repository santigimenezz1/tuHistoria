"use client"
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import '../ModalEditarSueño/modalEditarSueño.css'
import AvatarPerfil from '../AvatarPerfil/AvatarPerfil';
import { FormControl, FormControlLabel, FormLabel, Radio, TextField, styled } from '@mui/material';
import BotonModalEditar from '../BotonModalEditar/BotonModalEditar';
import CloseIcon from '@mui/icons-material/Close';
import Boton from '../Boton/Boton';
import BotonCrearCuenta from '../BotonCrearTarea/BotonCrearTarea';
import TarjetaFiltro from '../TarjetaFiltro/TarjetaFiltro';
import BotonEditar from '../TarjetaHistoria/BotonEditar/BotonEditar';
import RadioGroup from '../RadioGroup/RadioGroup';
import { useFormik } from 'formik';
import { useState } from 'react';
import { addDoc, collection, doc, serverTimestamp, updateDoc } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import Swal from 'sweetalert2';
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

  

  
export default function ModalEditarSueño( {historia} ) {
  const [estadoCategoria, setEstadoCategoria] = useState([])
  const [estadoPublico, setEstadoPublico] = useState(false)
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  
  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      mensaje: ""
    },
    onSubmit: (data) => {
      alert("esta funcionando")
      const objeto = {
        mensaje: data.mensaje,
        categorias: [...estadoCategoria],
        publico: estadoPublico,
        date: serverTimestamp(),
      }
      setEstadoCategoria([])
      // CREAR LA EN ORDEN FIREBASE
        const docRef = doc(db, "historias", historia.id);
         updateDoc(docRef, objeto)
         handleClose()
         Swal.fire({
          position: "center",
          icon: "success",
          title: "Historia editada ! ",
          showConfirmButton: true,
          timer: 3500,
        });

    },
    validateOnChange: false      
})

  return (
    <div>
      <div onClick={()=>handleOpen()}>
      <BotonEditar />
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
       
          <form onSubmit={handleSubmit} className='formulario__modalEditar'>
            <StyledTextField
      multiline
      minRows={3}
      maxRows={6}
      fullWidth
      variant="outlined"
      placeholder='Soñé que...'
      name='mensaje'
      onChange={handleChange}
    />
 <FormControl>
  <h3>Elige alguna categoría</h3>
  <div className='tarjetas__filtro'>
  <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Caía"} />
  <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Volaba"} />
  <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Me perseguían"} />
  <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Era otra persona"} />
  <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Peleaba"} />
  <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Veía un muerto"} />
  </div>

<RadioGroup estadoPublico={estadoPublico} setEstadoPublico={setEstadoPublico} />
</FormControl>
          <div className='container__buttonsForm'>
            <Boton  text={"cancelar"} />
            <Boton type={"submit"} text={"Editar"}  />
          </div>
          </form>
        </div>
       
      </Modal>
    </div>
  );
}