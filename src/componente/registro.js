import { register, saveUsuario, getDatos } from '../firebaseconfig/firebase.js';
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
export const registroDom = () => {
  const btnRegistrar = document.querySelector('#btn-registrar');
  // Variablesde los inputs
  const usernameInput = document.querySelector('#userName');
  const emailInput = document.querySelector('#userEmail');
  const passwordInput = document.querySelector('#userPassword');
  const confirmPasswordInput = document.querySelector('#userConfirmPassword');

  // Variables de Mensaje de Vacio
  const alertName = document.querySelector('#alertName');
  const alertEmail = document.querySelector('#alertEmail');
  const alertPassword = document.querySelector('#alertPassword');
  const alertConfirmPassword = document.querySelector('#alertConfirmPassword');

  btnRegistrar.addEventListener('click', () => {
    getDatos()
      .then((docs) => {
        docs.forEach((doc) => {
          console.log(doc.data());
        });
      });
    validateEmpty(usernameInput.value, alertName, 'Ingrese su usuario');
    validateEmpty(emailInput.value, alertEmail, 'Ingrese su e-mail');
    validateEmpty(passwordInput.value, alertPassword, 'Ingrese su contraseña');
    validateEmpty(confirmPasswordInput.value, alertConfirmPassword, 'Ingrese la confirmacion de su contraseña');
    // uiserNameInput.reset()
    register(emailInput.value, passwordInput.value)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential.user);
        saveUsuario(usernameInput.value, emailInput.value);
        window.location.hash = '#/home';
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          alertEmail.textContent = 'Email existente, prueba con otro';
        }
        if (error.code === 'auth/weak-password') {
          alertPassword.textContent = 'La contraseña debe tener al menos 6 caracteres';
        }
        console.log(error.code);
        console.log(error.message);
      });
  });
};
