import {
  getDatoPost, createPost, getCurrentUser, getDatoUser,
} from '../firebaseconfig/firebase.js';
import { btnModales } from './utils.js';

export const homeView = () => {
  const home = /* Html */`
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
  </section>
  <!--<section class="secc-nombre">
    <div><img src="imagenes/usuario.png"></div>
    <span >nombre del usuario</span>
  </section>-->
  <section class="secc-publicacionFoto">
  </section>
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
  sectionHome.classList.add('seccionPrincipal');
  sectionHome.innerHTML = home;
  sectionHome.classList.add('seccion');
  return sectionHome;
};
export const homeDom = () => {
  // Usuario activo
  const id = getCurrentUser().uid;
  // traendo nombre del usuario en el home/descripcion
  const conainerPost = document.querySelector('.secc-publicacionFoto');
  // const horaPost = new Date().toLocaleTimeString(); // toLocaleDateString()//toLocaleString()
  const fechaPost = new Date().toLocaleString();
  // jalando una funcion para mostrar los posts
  getDatoPost((posts) => {
    console.log(posts)
    let contenido = '';
    posts.forEach((doc) => {
      // muestra los post  en el home
      console.log(doc.data());
      const idUserPost = doc.data().uid;
      getDatoUser(idUserPost)
        .then((userDoc) => {
          const getFecha = doc.data().datePost;
          const nombreUser = userDoc.data().nombre.toUpperCase();
          const postpublic = /* Html */ `
      <section class="postContainer">
        <section class="secc-nombre">
          <div><img src="imagenes/usuario.png"></div>
          <span id ="nameFecha">
            <span >${nombreUser}</span>
            <!--<span id="hora">${'horaPost'}</span>-->
            <span id="fecha">${getFecha}</span>
          </span>
        </section>
          <p class="texto">${doc.data().descripcion}</p>
          <nav class="secc-like">
            <span class="spanLikeComent">
              <button class="licogu like"><img data-id ="${doc.id}" src="imagenes/likeRojo.png"></button>
              <button class="licogu" href=""><img src="imagenes/comentar.png"></button>
              <p class="cantidad-likes"><span id= 'numeroLikes'>${doc.data().likes.length}</span> Me gusta</p>
          </span>
        <!-- <button class="licogu guardar"><img src="imagenes/guardar.png"></button> -->
        </nav>
      </section>
      `;
          contenido += postpublic;
          conainerPost.innerHTML = contenido;
          // Funcionalidad a like
          const btnLike = document.querySelectorAll('.like');
          // const likeActive = doc.data().likes.includes(getCurrentUser().uid);
          // const likeActive = doc.data().likes.includes(id);
          // console.log(likeActive);
          btnLike.forEach((i) => {
            i.addEventListener('click', (e) => {
              console.log(e.target.dataset.id);
            });
          });
        });
    });
  });
  const perfilNombre = document.querySelector('.secc-perfilName');
  getDatoUser(id)
    .then((doc) => {
      // muestra el nombre del usuario en el home y perfil
      const nombreUser = doc.data().nombre.toUpperCase();
      const contenedorName =/* Html */ `
      <p>HOLA <span id="nameProfile">${nombreUser}</span></p>
      `;
      perfilNombre.innerHTML = contenedorName;
    });

  const descripcion = document.querySelector('#descripcion');
  // const imagen = document.querySelector('#imgSeleccionada');
  const btnPublicar = document.querySelector('#btn-publicar');
  const ventanaModal = document.querySelector('.container-modal');
  const btnAgregar = document.querySelector('#agregar');
  const btnCerrar = document.querySelector('#btn-cerrar');
  btnModales(btnAgregar, ventanaModal, 'flex');
  btnModales(btnCerrar, ventanaModal, 'none');
  btnPublicar.addEventListener('click', () => {
    // Creando los campos de savePost()cuando le demos al btn publicar
    createPost(id, descripcion.value, fechaPost, []);
    ventanaModal.style.display = 'none';
    const descripcionText = document.querySelector('.textArea');
    descripcionText.value = '';
  });
};
