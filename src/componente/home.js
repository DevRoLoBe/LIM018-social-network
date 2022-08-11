export const homeView = () => {
  const home = /*Html*/`
  <header class="logo-principal">
    <img class="logo-top" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
    <span>
    <a href ="#/post"><img src="imagenes/agregar.png"></a>
    <a href =""><img src="imagenes/notificar.png"></a>
    <a href =""><img src="imagenes/comentar.png"></a></span>
  </header>
  <section class="secc-perfilName">
    <div id="perfilPerson"><img src="imagenes/usuario.png"></div>
    <p id="nameProfile">Hola <span>Mario Rojas</span></p>
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
  const sectionHome = document.createElement('section');
  sectionHome.innerHTML = home;
  sectionHome.classList.add('seccion');
  return sectionHome;
};
// const querySnapshot = await getDocs(collection(db, "users"));
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
