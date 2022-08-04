import { register } from '../firebaseconfig/firebase.js';

export const registroview = () => {
  const registro = /*html*/`
  <div class="container">
    <div class="forms">
      <div class="form registro">
        <!--<figure class="logo">
          <img class="logo__registro" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
        </figure>-->
        <span class="form-title">Registro</span>
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
  const confirmarPassword = document.querySelector('#alertConfirmPassword');

  // Funciones de validacion
  function showError(alertShow, mensaje) {
    alertShow.style.color = 'red';
    alertShow.style.fontSize = '11px';
    alertShow.textContent = mensaje;
  }
  function hideError(alertHide) {
    alertHide.textContent = '';
  }
  function validateEmpty(valueInput, alerts, msj) {
    if (valueInput.length === 0) {
      showError(alerts, msj);
    } else {
      hideError(alerts);
    }
  }
  btnRegistrar.addEventListener('click', () => {
    validateEmpty(usernameInput.value, alertName, 'Ingrese su usuario');
    register(emailInput.value, passwordInput.value)
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
