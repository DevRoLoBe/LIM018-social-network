import { getPost, savePost} from '../firebaseconfig/firebase.js';
import { btnModales } from './utils.js';

export const homeView = () => {
//   getUser(auth.currentUser.uid)
//     .then((user) => {
//       console.log(user.data().name);
// // const userImgProfile = userImage(user.data().imgProfile);
// // userName = userName.split(' ', 2).join(' ');
// });
  // getUsuario(auth.currentUser).then(snap => {
  //   snap.forEach(doc => console .log(doc.data()))
  // })
  const home = /*Html*/`
  <header class="header">
    <img class="logo-top" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
    <span>
      <span id="agregar" class="btn-img"><img src="imagenes/agregar.png"></span>
     <!-- <a class="btn-img" href =""><img src="imagenes/notificar.png"></a>
      <a class="btn-img" href =""><img src="imagenes/comentar.png"></a> -->
    </span>
  </header> 
  <section class="secc-perfilName">
    <div id="perfilPerson"><img src="imagenes/usuario.png"></div>
    <p>Hola$ <span id="nameProfile">${'userName'}</span></p>
  </section>
  <section class="secc-nombre">
    <div><img src="imagenes/usuario.png"></div>
    <span >nombre del usuario</span>
  </section>
  <section class="secc-publicacionFoto">
    <!--<div class="texto"></div>
    <nav class="secc-like">
      <span class="spanLikeComent">
        <button class="licogu like"><img src="imagenes/like.png"></button>
        <a class="licogu" href=""><img src="imagenes/comentar.png"></a>
      </span>
   <button class="licogu guardar"><img src="imagenes/guardar.png"></button> 
    </nav> -->
  </section>
   <!--<section class="secc-descripcion">
   <p class="cantidad-likes"><span>23</span> Me gusta</p>
    <div class="descrip">
      <p class="nombre"><span class="nombre__span">Camila Vasquez</span>Descripcion encontre al perro en condiciones horribles</p>
      <p class="comentarios">Ver los <span>23</span> comentarios</p>
    </div>
    <p class="tiempo">Hace 1 dia</p>
  </section>-->
  <div class="container-modal">
    <div class="content-modal postModal">
      <div class="tituloPublicacion">
        <h2>Publicacion</h2>
        <div id="btn-cerrar" class="btn-cerrarRed"><i class="uil uil-multiply"></i></div>
      </div>
      <div class="descripcion">
        <img id="imgSeleccionada"class="imgSeleccionada"src="imagenes/loginAbrazo.png" alt="Imagen seleccionada">
        <textarea id="descripcion"class="textArea"></textarea>
      </div>
      <section class= "botonesPost">
        <input type="file" class="input-file"> 
        <button id="btn-publicar">Publicar</button> 
      </section>
    </div>
  </div>
  <footer class="menu">
    <nav class="menuInferior ">
      <a href='#/home'><img src="imagenes/home.png"></a>
      <a href='#'><img src="imagenes/buscar.png"></a>
      <a href='#/servicio'><img src="imagenes/donarMano.png"></a>
      <a href='#/profile'><img src="imagenes/usuario.png"></a>
    </nav>
  </footer>
  `;
  const sectionHome = document.createElement('section');
  sectionHome.innerHTML = home;
  sectionHome.classList.add('seccion');
  return sectionHome;
};
export const homeDom = () => {
  const descripcion = document.querySelector('#descripcion');
  const imagen = document.querySelector('#imgSeleccionada');
  const btnPublicar = document.querySelector('#btn-publicar');
  const ventanaModal = document.querySelector('.container-modal');
  const btnAgregar = document.querySelector('#agregar');
  const btnCerrar = document.querySelector('#btn-cerrar');
  btnModales(btnAgregar, ventanaModal, 'flex');
  btnModales(btnCerrar, ventanaModal, 'none');
  btnPublicar.addEventListener('click', () => {
    savePost(descripcion.value);
  });
};
// getUser(auth.currentUser.uid)
//   .then((user) => {
//     const userName = user.data().name;
//   // const userImgProfile = userImage(user.data().imgProfile);
//   // userName = userName.split(' ', 2).join(' ');
// });

// const querySnapshot = await getDocs(collection(db, 'post'));
// querySnapshot.forEach((doc) => {
//   console.log(`${doc.id} => ${doc.data()}`);
// });
// try {
//   const docRef = await addDoc(collection(db, "users"), {
//     first: "Ada",
//     last: "Lovelace",
//     born: 1815
//   });
//   console.log("Document written with ID: ", docRef.id);
// } catch (e) {
//   console.error("Error adding document: ", e);
// }
