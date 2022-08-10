export const profileView = () => {
  const profile = /*html*/ ` 
    <header class="logo-perfil">
    <a href =""><img src="imagenes/agregarFoto.png"></a>
    <a href =""><img src="imagenes/bar.png"></a>
  </header>
  <section class="secc-numSeguidores">
    <div>perfiles de seguidores</div>
  </section>
    <p id="nameProfile"></p>
    <section class= "editProfile">
    <button> <a href='#/'>Editar perfil</a></button> 
    </section>
  <section class="historias">
    <div id="historia"> <img src="imagenes/home.png"></div>
    <div id="historia"><img src="imagenes/home.png"></div>
    <div id="historia"><img src="imagenes/home.png"></div>
  </section>
  <footer class="menu">
    <nav class="menuInferior ">
      <a href='#/home'><img src="imagenes/home.png"></a>
      <a href='#'><img src="imagenes/buscar.png"></a>
      <a href='#'><img src="imagenes/donarMano.png"></a>
      <a href='#/profile'><img src="imagenes/usuario.png"></a>
    </nav>
  </footer>
    `;
  const sectionProfile = document.createElement('section');
  sectionProfile.innerHTML = profile;
  sectionProfile.classList.add('seccion');
  return sectionProfile;
};
