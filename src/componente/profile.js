import { btnModales } from './utils.js';
import {
  cerrarSesion, getDatoUser, deletePost, getUserPost, onGetPostUser, updatePost,
} from '../firebaseconfig/firebase.js';

export const profileView = () => {
  const profile = /* html */ ` 
    <header class="logo-perfil">
    <!--<a href =""><img src="imagenes/agregarFoto.png"></a>-->
    <a href =""><img src="imagenes/bar.png"></a>
  </header>
  <section class="secc-perfilName">
  <!--<div id="perfilPerson"><img src="imagenes/usuario.png"></div>
  <p id="nameProfile">Mario Rojas</p>-->
  </section>
    <section class= "editProfile">
    <button id="btn-editar"> Editar perfil</button> 
    </section>
  <!--<section class="historias">
    <div id="historia"> <img src="imagenes/home.png"></div>
    <div id="historia"><img src="imagenes/home.png"></div>
    <div id="historia"><img src="imagenes/home.png"></div>
    <div id="historia"><img src="imagenes/home.png"></div>
  </section>-->
  <section class="menuIntermedio">
    <!--<a href =""><img src="imagenes/publicar.png"></a>
    <a href =""><img src="imagenes/play.png"></a>-->
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
  sectionProfile.classList.add('seccionPrincipal');
  return sectionProfile;
};
export const profileDom = () => {
  // const id = getCurrentUser().uid;
  const id = JSON.parse(sessionStorage.getItem('idUser'));
  const perfilNombre = document.querySelector('.secc-perfilName');
  const nombreModal = document.querySelector('.nombreModal');

  getDatoUser(id)
    .then((doc) => {
      const nombreUser = doc.data().nombre.toUpperCase();
      const contenedorName = /* Html */ `
      <p id="nameProfile">${nombreUser}</p>
      `;
      const contenedorNombreModal = /* Html */`
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
  // getUserPost()llamardentroeliddel documento dentro , el foreach imprime el documento que filtras
  const postPerfil = () => {
    getUserPost(id)
      .then((posts) => {
        let content = '';
        // const mostrar = posts.data().filter((document) => document.data().uid === id);
        posts.forEach((doc) => {
        // muestra los post  en el home
          const idUserPost = doc.data().uid;
          getDatoUser(idUserPost).then((userDoc) => {
          // Id del usuario en autentication
            const getFecha = doc.data().datePost;
            const nombreUser = userDoc.data().nombre.toUpperCase();
            const postPerfiles = /* Html */ `
          <section class="postContainer">
            <section class="secc-nombre2">
              <div class="fotoPostPerfil"><img src="imagenes/usuario.png"></div>
              <section class="postHeaderPerfil">
                <div id ="nameBtns">
                  <span>${nombreUser}</span>
                  <span class="btnEditarBorrar">
                    <span class="editPost"><img data-id='${doc.id}' src="imagenes/editar.png" alt="boton de editar"></span>
                    <span class='deleteButton' data-id='${doc.id}'><img src="imagenes/eliminar.png" alt="boton de eliminar"></span>
                  </span>
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
            <div class="container-modal" data-id='${doc.id}'>
            <div class="content-modal postModal">
              <div class="tituloPublicacion">
                <h2>Publicacion</h2>
                <div class="btn-cerrarRed"><i class="uil uil-multiply"></i></div>
              </div>
              <div class="descripcion">
                <img id="imgSeleccionada"class="imgSeleccionada"src="imagenes/loginAbrazo.png" alt="Imagen seleccionada">
                <textarea id='id-${doc.id}' class="textArea">${doc.data().descripcion}</textarea>
              </div>
              <section class= "botonesPost">
                <input type="file" class="input-file"> 
                <button class="guardar" data-id='${doc.id}'>Guardar</button> <!--data-id='{doc.id}'-->
              </section>
            </div>
          </div>
          </section>
          `;
            const containerPostPerfil = document.querySelector('.publicaciones');
            content += postPerfiles;
            containerPostPerfil.innerHTML = content;
            // containerPostPerfil.innerHTML = 'Hola';
            const btnEliminarPost = document.querySelectorAll('.deleteButton');
            btnEliminarPost.forEach((e) => {
              e.addEventListener('click', () => {
                deletePost(e.dataset.id);
              });
            });
            const ventanasModalEditar = document.querySelectorAll('.container-modal');
            ventanasModalEditar.forEach((modal) => {
              const btnCerar = modal.querySelector('.btn-cerrarRed');
              btnCerar.addEventListener('click', () => {
                const otroModalsito = btnCerar.closest('.container-modal');
                otroModalsito.style.display = 'none';
              });
            });
            const btnEditarPost = document.querySelectorAll('.editPost');
            btnEditarPost.forEach((btn) => {
              btn.addEventListener('click', (event) => {
                const docId = event.target.dataset.id;
                const miModalsito = document.querySelector(`.container-modal[data-id="${docId}"]`);
                miModalsito.style.display = 'flex';
              });
            });
            const btnGuardar = document.querySelectorAll('.guardar');
            btnGuardar.forEach((e) => {
              e.addEventListener('click', (event) => {
                // console.log(e.dataset.id);
                const docId = event.target.dataset.id;
                const descripcionText = document.querySelector(`#id-${docId}`).value;
                updatePost(docId, descripcionText);
                const miModalsito = document.querySelector(`.container-modal[data-id="${docId}"]`);
                // console.log(miModalsito);
                miModalsito.style.display = 'none';
              });
            });
          });
        });
      });
  };
  onGetPostUser(postPerfil);
};
