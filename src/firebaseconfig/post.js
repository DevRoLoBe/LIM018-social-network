import {
  getFirestore,
  getDocs,
  collection,
  addDoc,
  getDoc,
  doc,
  onSnapshot,
  deleteDoc,
  updateDoc,
  setDoc,
// eslint-disable-next-line import/no-unresolved
} from 'https://www.gstatic.com/firebasejs/9.9.1/firebase-firestore.js';

import { app } from './firebase.js';

const db = getFirestore(app);

export const userInfo = (email, uid, name) => addDoc(collection(db, 'usuarios'), {
  email,
  uid,
  name,
});

export const userInfoFirestore = (uid, infoUser) => setDoc(doc(db, 'usuarios', uid), infoUser);

// dejar la función sin responsabilidad más que para firestore
export const getPosts = () => getDocs(collection(db, 'post'));

export const getPost = (id) => getDoc(doc(db, 'post', id));

export const createPost = (post) => addDoc(collection(db, 'post'), post);

export const onGetPosts = async (callback) => {
  await onSnapshot(collection(db, 'post'), (callback));
};

export const deletePost = (id) => deleteDoc(doc(db, 'post', id));

export const updatePost = (id, post) => updateDoc(doc(db, 'post', id), post);

// export const getUser = (id) => query(collection(db, 'usuarios'), where('uid', '==', id));
export const getUser = (id) => getDoc(doc(db, 'usuarios', id));
