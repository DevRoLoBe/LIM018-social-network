export const profileView = () => {
  const profile = /*html*/ ` 
    <header class="logo-perfil">
    <a href =""><img src="imagenes/agregar.png"></a>
    <a href =""><img src="imagenes/notificar.png"></a>
  </header>
  <section class="secc-noticias">
    <div>Noticias</div>
  </section>
  <section class="secc-nombre">
    <div>Foto,Nombre y Tres puntos</div>
  </section>
  <section class="secc-publicacionFoto">
    <div class="imagen">Foto del animal</div>
    <nav class="secc-like">
      <span class="spanLikeComent">
        <button class="licogu like"><img src="imagenes/like.png"></button>
        <a class="licogu" href=""><img src="imagenes/comentar.png"></a>
      </span>
      <button class="licogu guardar"><img src="imagenes/guardar.png"></button>
    </nav>
  </section>
  <section class="secc-descripcion">
    <p class="cantidad-likes"><span>23</span> Me gusta</p>
    <div class="descrip">
      <p class="nombre"><span class="nombre__span">Camila Vasquez</span>Descripcion encontre al perro en condiciones horribles</p>
      <p class="comentarios">Ver los <span>23</span> comentarios</p>
    </div>
    <p class="tiempo">Hace 1 dia</p>
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
