export const homeView = () => {
  const home =/*Html*/`
  <header class="logo-principal">
    <img class="logo-top" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
    <span>
    <a href =""><img src="imagenes/agregar.png"></a>
    <a href =""><img src="imagenes/notificar.png"></a>
    <a href =""><img src="imagenes/comentar.png"></a></span>
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
  `;
  const sectionHome = document.createElement('section');
  sectionHome.innerHTML = home;
  sectionHome.classList.add('seccion');
  return sectionHome;
};
