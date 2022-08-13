import { btnModales } from './utils.js';
import { cerrarSesion } from '../firebaseconfig/firebase.js';
export const profileView = () => {
  const profile = /*html*/ ` 
    <header class="logo-perfil">
    <a href =""><img src="imagenes/agregarFoto.png"></a>
    <a href =""><img src="imagenes/bar.png"></a>
  </header>
  <section class="secc-perfilName">
  <div id="perfilPerson"><img src="imagenes/usuario.png"></div>
  <p id="nameProfile">Mario Rojas</p>
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
     <div>publicaciones jaladas del firestore</div>
  </section>
  <div class="container-modal">
    <div class="content-modal">
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
      <span class="nombrePerfil">Nombre</span>
      <p>Camila Vazquez</p>
      <div class="pre-descrip">
        <span class="nombrePerfil"> Presentacion</span>
        <textarea></textarea>
      </div>
    <div class="cerrarSesion">
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
  const ventanaModal = document.querySelector('.container-modal');
  const btnCerrar = document.querySelector('#btn-cerrar');
  const btnEditar = document.querySelector('#btn-editar');
  const btnCerrarSesion = document.querySelector('#cierreSesion');
  btnCerrarSesion.addEventListener('click', () => {
    cerrarSesion();
  });
  btnModales(btnEditar, ventanaModal, 'flex');
  btnModales(btnCerrar, ventanaModal, 'none');
};
