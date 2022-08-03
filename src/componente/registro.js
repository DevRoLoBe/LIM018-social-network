import { register } from '../firebaseconfig/firebase.js';

export const registroview = () => {
  const registro = /*html*/
  `<div class="container">
    <div class="forms">
      <div class="form registro">
        <!--<figure class="logo">
          <img class="logo__registro" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
        </figure>-->
        <span class="form-title">Registro</span>
        <form action="#">
          <div class="campo-entrada">
            <input type="text" placeholder="Ingresar nombre"  class= "userName" id="userName" required>
            <i class="uil uil-user"></i>
            <p id="alertName"></p>
          </div>
          <div class="campo-entrada">
            <input type="email" placeholder="Ingresar email" required  class= "email" id= "userEmail">
            <i class="uil uil-envelope icon"></i>
            <span id="alertEmail"></span>
          </div>
          <div class="campo-entrada">
            <input type="password" placeholder="Ingresar contraseña" required class="password" id= "userPassword">
            <i class="uil uil-lock icon"></i>
            <span id="alertPassword"></span>
          </div>
          <div class="campo-entrada">
            <input type="password"  placeholder="Confirmar contraseña" required class="confirmarPassword" id= "userConfirmPassword">
            <i class="uil uil-lock icon"></i>
            <i class="uil uil-eye-slash showHidePw"></i>
            <span id="alertConfirmPassword"></span>
          </div>
          <div class="campo-entrada campo-entrada__boton">
            <input id="btn-registrar" type="button" value="Registrarse">
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
  console.log(btnRegistrar);
  // variables
  const usernameInput = document.querySelector('#userName').value;
  const emailInput = document.querySelector('#userEmail').value;
  const passwordInput = document.querySelector('#userPassword').value;
  // const confirmPasswordInput = sectionRegistro.querySelector('.userConfirmPassword').value;
  const alertName = document.querySelector('#alertName');
  // const alertEmail = document.querySelector('#alertEmail');
  btnRegistrar.addEventListener('click', () => {
    if (usernameInput.length === 0) {
      alertName.textContent = 'llena tu nombre';
    }
    register(emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  });
};
