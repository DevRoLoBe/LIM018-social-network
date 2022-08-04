export const homeView = () => {
  const home = /*Html*/`
  <header>
    <figure class="logo">
    <img class="logo__registro" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
    </figure>
    <a href ="#"><img src="imagenes/loginAbrazo"></a>
  </header>
  <h1 class="title">Patitas Preciosas</h1>
  <div class="cont-logo">
  <img class="logo" src="imagenes/titulo.png" alt="patitas preciosas">
  </div>
  <div class="group-btn">
  <a href="#/login"><button class="btn-login btn-general" type="button" id="login">Iniciar sesión</button></a>
  <a href="#/registro"><button class="btn-singup btn-general" type="button" id="register">Registrarse</button></a>
  </div>`;
  const sectionHome = document.createElement('section');
  sectionHome.innerHTML = home;
  return sectionHome;
};
