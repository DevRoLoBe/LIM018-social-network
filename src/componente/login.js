import { loginExistent, googleInicioSesion, createUser } from '../firebaseconfig/firebase.js';
import { validateEmpty } from './utils.js';

export const loginview = () => {
  const login = /* html */ `
      <div class="form login">
        <figure class="logo">
          <img class="logo__login" src="imagenes/loginCompleto.png" class="logo hidden" alt="perro y gato abrazadose">
        </figure>
        <form action="#">
          <div class="campo-entrada">
            <input type="text" placeholder="Ingresar email" id='userGmail' required>
            <span id="alertgmail"></span>
            <i class="uil uil-envelope icon"></i>
          </div>
          <div class="campo-entrada">
            <input type="password" class="password" placeholder="Ingresar contraseña" id='userPassword' required>
            <span id="alertpassword"></span>
            <i class="uil uil-lock icon"></i>
            <i class="uil uil-eye-slash showHidePw"></i>
          </div>
            <a href="#" class="text">¿Olvidaste tu contraseña?</a>
          <div class="campo-entrada campo-entrada__boton">
            <button id="btn-login">Iniciar Sesión</button>
            <button id="btn-google"><img src="imagenes/google.png">Inicia Sesion</button>
          </div>
          <div class="login-registrar">
            <span class="text">¿No tiene una cuenta?</span>
            <a href="#/registro" class="text login-registrar__text--registro">Registrate</a>
          </div>
        </form>
      </div>`;

  const sectionLogin = document.createElement('section');
  sectionLogin.classList.add('container');
  sectionLogin.innerHTML = login;
  return sectionLogin;
};
export const loginDom = () => {
  const btnLogin = document.querySelector('#btn-login');
  const btnGoogle = document.querySelector('#btn-google');
  const gmailInput = document.querySelector('#userGmail');
  const passwordInput = document.querySelector('#userPassword');
  // Variables de Mensaje de Vacio
  const alertGmail = document.querySelector('#alertgmail');
  const alertPassword = document.querySelector('#alertpassword');

  btnLogin.addEventListener('click', () => {
    console.log('me dieron un click!');
    validateEmpty(gmailInput.value, alertGmail, 'ingrese su correo electronico');
    validateEmpty(passwordInput.value, alertPassword, 'ingrese su contraseña');
    loginExistent(gmailInput.value, passwordInput.value)
      .then(() => {
        console.log('HOLAAAAAAAAAAAAAAAAA');
        window.location.hash = '#/home';
      // ...
      })
      .catch((error) => {
        if (error.code === 'auth/user-not-found') {
          alertGmail.textContent = 'Email incorrecto';
        }
        if (error.code === 'auth/wrong-password') {
          alertPassword.textContent = 'Contraseña incorrecta';
        }
        if (error.code === 'auth/user-disabled') {
          alertGmail.textContent = 'Usuario deshabilitado';
        }
        // error.code;
        // error.message;
      });
  });
  btnGoogle.addEventListener('click', () => {
    googleInicioSesion()
      .then((userGoogle) => {
        const usuario = userGoogle.user;
        createUser(usuario.displayName, usuario.email, usuario.uid);
        window.location.hash = '#/home';
      });
  });
};
