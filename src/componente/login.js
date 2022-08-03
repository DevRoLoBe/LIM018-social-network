import { loginExistent } from '../firebaseconfig/firebase.js';

export const loginview = () => {
  const login = /*html*/ `
  <div class="container"> 
    <div class="forms">
      <div class="form login">
        <!--<figure class="logo">
          <img class="logo__login" src="imagenes/loginCompleto.png" class="logo hidden" alt="perro y gato abrazadose">
        </figure>-->
        <span class="form-title">Login</span>
        <form action="#">
          <div class="campo-entrada">
            <input type="text" placeholder="Ingresar email" id='userGmail' required>
            <i class="uil uil-envelope icon"></i>
          </div>
          <div class="campo-entrada">
            <input type="password" class="password" placeholder="Ingresar contraseña" id='userPassword' required>
            <i class="uil uil-lock icon"></i>
            <i class="uil uil-eye-slash showHidePw"></i>
          </div>
            <a href="#" class="text">¿Olvidaste tu contraseña?</a>
          <div class="campo-entrada campo-entrada__boton">
            <input id="btn-login" type="button" value="Iniciar Sesión">
          </div>
        </form>
        <div class="login-registrar">
          <span class="text">¿No tiene una cuenta?</span>
          <a href="#/registro" class="text login-registrar__text--registro">Registrate</a>
        </div>
      </div>
    </div>
  </div>`;

  const sectionLogin = document.createElement('section');
  sectionLogin.innerHTML = login;
  return sectionLogin;
};
export const loginDom = () => {  
  const btnLogin = document.querySelector('#btn-login');
  const gmailInput = document.querySelector('#userGmail');
  const passwordInput = document.querySelector('#userPassword');

  btnLogin.addEventListener('click', () => {
    loginExistent(gmailInput.value, passwordInput.value)
      .then((userCredential) => {
      // Signed in
        userCredential.user;
      // ...
      })
      .catch((error) => {
        error.code;
        error.message;
      });
  });
};
