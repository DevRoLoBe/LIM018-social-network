// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
// eslint-disable-next-line import/no-unresolved
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';
import { getFirestore, collection, addDoc, getDocs, doc, getDoc, setDoc } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// eslint-disable-next-line import/no-unresolved

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBFhf_NaW24WrzT1_-UQzT1JbqBxrym8MQ',
  authDomain: 'patitas-preciosas.firebaseapp.com',
  projectId: 'patitas-preciosas',
  storageBucket: 'patitas-preciosas.appspot.com',
  messagingSenderId: '829661614696',
  appId: '1:829661614696:web:7f0e4591d634021d89a1dd',
  measurementId: 'G-ZPNZHM3T8W',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Conecta nuestra app con la base de datos de firestore
const db = getFirestore(app);

// Obtiene la autenticacion de usuario
const auth = getAuth(app);

// Función que crea usuarios en Firebase con correo y contraseña
export const register = (gmail, password) => createUserWithEmailAndPassword(auth, gmail, password);

//  Función que  loguea usuarios con correo y contraseña
export const loginExistent = (gmail, password) => signInWithEmailAndPassword(auth, gmail, password);

// Funcion de cierre de Sesion
export const cerrarSesion = () => {
  signOut(auth);
  window.location.hash = '';
};

// Función para crear colleccion de Post
export const savePost = (descripcion) => {
  addDoc(collection(db, 'post'), { descripcion });
};

// Funcion para crear colleccion de datosUsuario
export const saveUsuario = (nombre, id, email) => {
  addDoc(collection(db, 'datosUsuario'), { nombre, id, email });
};

// dejar la función sin responsabilidad más que para firestore
export const getDatos = () => getDocs(collection(db, 'datosUsuario'));
export const getServicios = () => getDocs(collection(db, 'servicio'));
// export const getPosts = () => getDocs(collection(db, 'post'));
// export const getPost = (id) => getDoc(doc(db, 'post', id));
