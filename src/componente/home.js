export const homeView = () => {
  const home = `<h1 class="title">TWITCHTTER</h1>
  <div class="cont-logo">
  <img class="logo" src="./img/mandoneon.png" alt="logoTwitchtter">
  </div>
  <h2 class="slogan slogan-welcome">¡La red social creada por gamers para gamers!</h2>
  <div class="group-btn">
  <a href="#/login"><button class="btn-login btn-general" type="button" id="logIn">Iniciar sesión</button></a>
  <a href="#/register"><button class="btn-singup btn-general" type="button" id="singUp">Registrarse</button></a>
  </div>`;
  const sectionHome = document.createElement('section');
  sectionHome.setAttribute('class', 'screen-welcome');
  sectionHome.innerHTML = home;
  return sectionHome;
};
