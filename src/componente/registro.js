import { register, saveName, getName } from '../firebaseconfig/firebase.js';
import { validateEmpty } from './utils.js';

export const registroview = () => {
  const registro = /*html*/`
  <div class="container">
    <div class="forms">
      <div class="form registro">
        <figure class="logo">
          <img class="logo__registro" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
        </figure>
        <form action="#">
          <div class="campo-entrada">
            <input type="text" placeholder="Ingresar nombre"  class= "userName" id="userName" >
            <i class="uil uil-user"></i>
            <span id="alertName"></span>
          </div>
          <div class="campo-entrada">
            <input type="email" placeholder="Ingresar email"  class= "email" id= "userEmail" required >
            <i class="uil uil-envelope icon"></i>
            <span id="alertEmail"></span>
          </div>
          <div class="campo-entrada">
            <input type="password" placeholder="Ingresar contraseña"  class="password" id= "userPassword" required>
            <i class="uil uil-lock icon"></i>
            <span id="alertPassword"></span>
          </div>
          <div class="campo-entrada">
            <input type="password"  placeholder="Confirmar contraseña"  class="confirmarPassword" id= "userConfirmPassword" required>
            <i class="uil uil-lock icon"></i>
            <i class="uil uil-eye-slash showHidePw"></i>
            <span id="alertConfirmPassword"></span>
          </div>
          <div class="campo-entrada campo-entrada__boton">
            <input id="btn-registrar"  type="button" value="Registrarse">
          </div>
        </form>
        <div class="login-registrar">
          <span class="text">¿Ya tienes una cuenta?</span>
          <a href="#/login" class="text login-registrar__text--registro">Inicia Sesion</a>
        </div>
      </div>
    </div>
  </div>`;

  // Creando la seccion que contendra al registro
  const sectionRegistro = document.createElement('section');
  sectionRegistro.innerHTML = registro;
  return sectionRegistro;
};
export const registroFirebase = (emailValue, passwordValue) => {
  register(emailValue, passwordValue).then((userCredential) => {
    // Signed in
    console.log(userCredential.user);
    // ...
  }).catch((error) => {
    error.code;
    error.message;
  });
};

export const registroDom = () => {
  const btnRegistrar = document.querySelector('#btn-registrar');
  // Variablesde los inputs
  const usernameInput = document.querySelector('#userName');
  const emailInput = document.querySelector('#userEmail');
  const passwordInput = document.querySelector('#userPassword');
  const confirmPasswordInput = document.querySelector('#userConfirmPassword');
  // Variable del boton
  // Variables de Mensaje de Vacio
  const alertName = document.querySelector('#alertName');
  const alertEmail = document.querySelector('#alertEmail');
  const alertPassword = document.querySelector('#alertPassword');
  const alertConfirmPassword = document.querySelector('#alertConfirmPassword');
  btnRegistrar.addEventListener('click', () => {
    getName();
    validateEmpty(usernameInput.value, alertName, 'Ingrese su usuario');
    validateEmpty(emailInput.value, alertEmail, 'Ingrese su e-mail');
    validateEmpty(passwordInput.value, alertPassword, 'Ingrese su contraseña');
    validateEmpty(confirmPasswordInput.value, alertConfirmPassword, 'Ingrese la confirmacion de su contraseña');
    saveName(usernameInput.value);
    registroFirebase(emailInput.value, passwordInput.value);
  });
};
