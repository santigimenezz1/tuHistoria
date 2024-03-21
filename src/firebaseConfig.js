import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import {getDownloadURL, getStorage, ref, uploadBytes} from 'firebase/storage'
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";
import { v4 } from "uuid";
import Swal from "sweetalert2";

const firebaseConfig = {
    apiKey: "AIzaSyDd2xKwAziOJolMAeixkIPBWuWme048WeY",
    authDomain: "tu-historia-4ef35.firebaseapp.com",
    projectId: "tu-historia-4ef35",
    storageBucket: "tu-historia-4ef35.appspot.com",
    messagingSenderId: "608054185495",
    appId: "1:608054185495:web:c059093d721961c5255652",
    measurementId: "G-S3V9849KGP"
};
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);


export const login = async ({ email, password }) => {
  let res = await signInWithEmailAndPassword(auth, email, password);
  return res;
};

export const create = async ( email, password ) => {
  const auth = getAuth();

  // Verificar si el correo electrónico ya existe
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    // Si llegamos aquí, significa que el usuario ya existe, muestra la alerta
    return { userExists: true };
  } catch (error) {
    // Si se produce un error, el usuario no existe, continúa con la creación de la cuenta
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      return res;
    } catch (error) {
    }
  }
};

export const resetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    return true; // Indicar que el correo se envió con éxito
  } catch (error) {
    return false; // Indicar que ocurrió un error al enviar el correo
  }
};

export const subirArchivo = async (file) => {
  const storageRef = ref(storage, v4()); // Genera un ID único para el archivo
  try {
    await uploadBytes(storageRef, file);
    // Obten la URL de descarga del archivo después de subirlo
    const downloadURL = await getDownloadURL(storageRef);

    // Devuelve la URL de descarga
    return downloadURL;
  } catch (error) {
    console.error("Error al subir el archivo", error);
    throw error; // Puedes manejar el error en el componente que llama a esta función
  }
};


