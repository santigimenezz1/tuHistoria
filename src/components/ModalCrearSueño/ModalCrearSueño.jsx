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
import { useFormik } from 'formik';
import { useState } from 'react';
import { db } from '@/firebaseConfig';

import { addDoc,where, collection, doc, getDoc, getDocs, query, serverTimestamp, updateDoc } from 'firebase/firestore';
import Swal from 'sweetalert2';
import { useContext } from 'react';
import { CreateContext } from '@/Context/context';
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
  const [estadoCategoria, setEstadoCategoria] = useState([])
  const [estadoPublico, setEstadoPublico] = useState(false)
  const {usuarioOn, setUsuarioOn} = useContext(CreateContext)


  const { handleSubmit, handleChange } = useFormik({
    initialValues: {
      mensaje: ""
    },
    onSubmit: async (data) => {
      const objeto = {
        mensaje: data,
        categorias: [...estadoCategoria],
        publico: estadoPublico,
        date: serverTimestamp(),
        comentarios: [],
        user: {usuarioOn}
      };

      const objetoUser = {
        mensaje: data,
        categorias: [...estadoCategoria],
        publico: estadoPublico,
        comentarios: [],
        user: {usuarioOn}
      };
  
      try {
        // CREAR EN ORDEN EN FIREBASE historias
        const ordersCollection = collection(db, "historias");
        await addDoc(ordersCollection, objeto);
        handleClose();
        Swal.fire({
          position: "center",
          icon: "success",
          title: "¡Historia agregada!",
          showConfirmButton: true,
          timer: 3500,
        });

                // CREAR EN ORDEN EN FIREBASE usuarios

        try {
          const userCollection = collection(db, "usuarios");
          const q = query(userCollection, where("email", "==", usuarioOn.email));
          const querySnapshot = await getDocs(q);
        
          if (!querySnapshot.empty) {
            // Assuming email is unique, so there should be only one document
            const userDocRef = querySnapshot.docs[0].ref;
        
            const userData = querySnapshot.docs[0].data();
            console.log("Información del usuario:", userData);
        
            // Update only the "historias" array, preserving other data
            const updatedData = { ...userData, historias: [...userData.historias, objetoUser] };
        
            await updateDoc(userDocRef, updatedData);
            console.log("Usuario actualizado con éxito:", updatedData);
          } else {
            console.log("No se encontró un usuario con el email proporcionado");
          }
        } catch (error) {
          console.error("Error al obtener usuario por email:", error);
        }
        
      } 
      catch (error) {
        console.error("Error al agregar historia o buscar usuarios:", error);
      }
    },
    validateOnChange: false,
  });
        
  console.log({usuarioOn})

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

          <form onSubmit={handleSubmit} className="formulario__modalEditar">
            <StyledTextField
              multiline
              minRows={5}
              maxRows={8}
              fullWidth
              variant="outlined"
              placeholder="Soñé que..."
              name='mensaje'
              onChange={handleChange}
            />
            <FormControl>
              <h3>Elige alguna categoría</h3>
              <div className="tarjetas__filtro">
                <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Caía"} />
                <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Volaba"} />
                <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Me perseguían"} />
                <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Era otra persona"} />
                <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Peleaba"} />
                <TarjetaFiltro estadoCategoria={estadoCategoria} setEstadoCategoria={setEstadoCategoria} text={"Veía un muerto"} />
              </div>
              <FormLabel id="demo-radio-buttons-group-label">Quieres que sea..</FormLabel>
              <SelectRadio setEstadoPublico={setEstadoPublico} />
            </FormControl>
            <div className="container__buttonsForm">
              <Boton text={"cancelar"} />
              <Boton text={"Enviar"}  />
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}
