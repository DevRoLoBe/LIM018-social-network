// Import the functions you need from the SDKs you need
// eslint-disable-next-line import/no-unresolved
import { initializeApp } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-app.js';
// eslint-disable-next-line import/no-unresolved

import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-auth.js';

import { getFirestore, collection, addDoc, getDocs, getDoc, doc, setDoc, onSnapshot, query, orderBy } from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

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

// Inicializando la autenticacion
const auth = getAuth(app);

// Inicializando firestore
const db = getFirestore(app);

// Función que crea usuarios en Firebase con correo y contraseña
// eslint-disable-next-line max-len
export const createRegister = (gmail, password) => createUserWithEmailAndPassword(auth, gmail, password);

//  Función que  loguea usuarios con correo y contraseña
export const loginExistent = (gmail, password) => signInWithEmailAndPassword(auth, gmail, password);

// funcion para loguearse con cuenta gmail
const provider = new GoogleAuthProvider();
export const googleInicioSesion = () => signInWithPopup(auth, provider);

// Funcion de cierre de Sesion
export const cerrarSesion = () => {
  signOut(auth);
  window.location.hash = '';
};

// Usar el currentUser para saber el usuario actual
export const getCurrentUser = () => auth.currentUser;

// crea campos para usuarios en firestore
export const createUser = async (nombre, email, id) => {
  await setDoc(doc(db, 'datosUsuario', id), { nombre, email, id });
};
// / Crea campos en firestore para los posts
export const createPost = (uid, descripcion, datePost, likes) => {
  addDoc(collection(db, 'post'), { uid, descripcion, datePost, likes });
};

// Conseguiendo datos de firestore para mostrar en el home
export const getDatoUser = (id) => getDoc(doc(db, 'datosUsuario', id));
export const getServicios = () => getDocs(collection(db, 'servicio'));
export const getDatoPost = (callback) => {
  const probando = query(collection(db, 'post'), orderBy('datePost'));
  onSnapshot(probando, callback);
};
//
