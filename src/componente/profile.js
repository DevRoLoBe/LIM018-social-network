import { btnModales } from './utils.js';
import { cerrarSesion, getCurrentUser, getDatoUser, getDatoPost } from '../firebaseconfig/firebase.js';

export const profileView = () => {
  const profile = /*html*/ ` 
    <header class="logo-perfil">
    <a href =""><img src="imagenes/agregarFoto.png"></a>
    <a href =""><img src="imagenes/bar.png"></a>
  </header>
  <section class="secc-perfilName">
  <!--<div id="perfilPerson"><img src="imagenes/usuario.png"></div>
  <p id="nameProfile">Mario Rojas</p>-->
  </section>
    <section class= "editProfile">
    <button id="btn-editar"> Editar perfil</button> 
    </section>
  <section class="historias">
    <div id="historia"> <img src="imagenes/home.png"></div>
    <div id="historia"><img src="imagenes/home.png"></div>
    <div id="historia"><img src="imagenes/home.png"></div>
    <div id="historia"><img src="imagenes/home.png"></div>
  </section>
  <section class="menuIntermedio">
    <a href =""><img src="imagenes/publicar.png"></a>
    <a href =""><img src="imagenes/play.png"></a>
  </section>
  <section class="publicaciones">
  </section>
  <div class="container-modal">
    <div class="content-modal editarModal">
      <div class="tituloEditar">
        <div id="btn-cerrar" class="btn-cerrarRed"><i class="uil uil-times"></i></div>
        <h2>Editar Perfil</h2>
        <div class="btn-guardarVerde"><i class="uil uil-check"></i></div>
      </div>
      <div class="editarP">
        <div class="foto-perfil">
          <img src="imagenes/usuario.png" alt="Foto de perfil">
        </div>
        <span>Cambiar foto de perfil</span>
      </div>
      <div class="pre-descrip nombreModal">
      <!--<label for="nome">Nombre</label>
        <input type="text" id="nome" class="input" >-->
      </div>
      <div class="pre-descrip">
      <label for="descrip">Descripcion</label>
        <textarea id="descrip" class="input"></textarea>
      </div>
    <div>
      <button id ="cierreSesion" class="btn-sesion">Cerrar Sesion</button>
    </div>
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
  const sectionProfile = document.createElement('section');
  sectionProfile.innerHTML = profile;
  sectionProfile.classList.add('seccion');
  return sectionProfile;
};
export const profileDom = () => {
  const id = getCurrentUser().uid;
  const perfilNombre = document.querySelector('.secc-perfilName');
  const nombreModal = document.querySelector('.nombreModal');

  getDatoUser(id)
    .then((doc) => {
      const nombreUser = doc.data().nombre;
      const contenedorName =/*Html*/ `
      <p id="nameProfile">${nombreUser}</p>
      `;
      const contenedorNombreModal =/*Html*/`
      <label for="nome">Nombre</label>
        <input type="text" id="nome" class="input" value=${nombreUser}>
      </div>`;
      perfilNombre.innerHTML = contenedorName;
      nombreModal.innerHTML = contenedorNombreModal;
    });
  const ventanaModal = document.querySelector('.container-modal');
  const btnCerrar = document.querySelector('#btn-cerrar');
  const btnEditar = document.querySelector('#btn-editar');
  const btnCerrarSesion = document.querySelector('#cierreSesion');
  btnCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
  });
  btnModales(btnEditar, ventanaModal, 'flex');
  btnModales(btnCerrar, ventanaModal, 'none');
  getDatoPost((posts) => {
    let contenido = ' ';
    posts.forEach((doc) => {
      // muestra los post  en el home
      const idUserPost = doc.data().uid;
      getDatoUser(idUserPost)
        .then((userDoc) => {
          // const idUserDatosUsuario = userDoc.data().id;
          const getFecha = doc.data().datePost;
          const nombreUser = userDoc.data().nombre.toUpperCase();
          const postpublic = /*Html*/ `
            <section class="postContainer">
            <section class="secc-nombre2">
              <div class="fotoPostPerfil"><img src="imagenes/usuario.png"></div>
              <section class="postHeaderPerfil">
                <div id ="nameBtns">
                  <span >${nombreUser}</span>
                  <span id="btnEditarPost"><img src="imagenes/editar.png" alt="boton de editar"></span>
                  <span id='${doc.id}'><img src="imagenes/eliminar.png" alt="boton de eliminar"></span>
                </div>
                <span id="fecha">${getFecha}</span>
              </section>
            </section>
              <p class="texto">${doc.data().descripcion}</p>
              <nav class="secc-like">
                <span class="spanLikeComent">
                  <button class="licogu like"><img src="imagenes/like.png"></button>
                  <a class="licogu" href=""><img src="imagenes/comentar.png"></a>
                  <p class="cantidad-likes"><span id= 'numeroLikes'>23</span> Me gusta</p>
              </span>
            </nav>
          </section>
          `;
          const containerPostPerfil = document.querySelector('.publicaciones');
          contenido += postpublic;
          containerPostPerfil.innerHTML = contenido;
          // const btnEditarPost = document.querySelector('#btnEditarPost');
          // btnEditarPost.addEventListener('click', () => {
          // });
          const btnEliminarPost = document.getElementById(`${doc.id}`);
          console.log(btnEliminarPost);
          btnEliminarPost.addEventListener('click', () => {
            console.log('entre');
            // eliminarPost(doc.id)
            //   .then(() => {
            //     console.log('eliminando');
            //   });
          });
        });
    });
  });
};
