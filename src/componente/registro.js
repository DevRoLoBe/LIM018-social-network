import { register } from '../firebaseconfig/firebase.js';

export const registroview = () => {
  const registro = /*html*/
  `
  <div class="form">
    <div class="form-registro">
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
  // variables
  const usernameInput = document.querySelector('#userName');
  console.log('funciona', usernameInput);
  const emailInput = document.querySelector('#userEmail');
  const passwordInput = document.querySelector('#userPassword');
  const alertName = document.querySelector('#alertName');
  // const alertEmail = document.querySelector('#alertEmail');
  btnRegistrar.addEventListener('click', () => {
    if (usernameInput.length === 0) {
      alertName.textContent = 'Tiene que completar sus datos';
      alertName.innerHTML = '';
    }
    // const confirmPasswordInput = sectionRegistro.querySelector('.userConfirmPassword').value;
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
