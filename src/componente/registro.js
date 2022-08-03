import { register } from '../firebaseconfig/firebase.js';

export const registroview = () => {
  const registro = /*html*/
  `
  <div class="form">
    <div class="form-registro">
      <figure class="logo">
        <img class="logo__registro" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
      </figure>
      <form id="form-registro">
        <div class="campo-entrada">
          <input type="text" placeholder="Ingresar nombre"  class= "userName" id="userName" required>
          <i class="uil uil-user"></i>
        </div>
        <div class="campo-entrada">
          <input type="email" placeholder="Ingresar email" required  class= "email" id= "userEmail">
          <i class="uil uil-envelope icon"></i>
        </div>
        <div class="campo-entrada">
          <input type="password" placeholder="Ingresar contraseña" required class="password" id= "userPassword">
          <i class="uil uil-lock icon"></i>
        </div>
        <div class="campo-entrada">
          <input type="password"  placeholder="Confirmar contraseña" required class="confirmarPassword" id= "userConfirmPassword">
          <i class="uil uil-lock icon"></i>
          <i class="uil uil-eye-slash showHidePw"></i>
        </div>
        <div class="campo-entrada campo-entrada__boton">
          <input id="btn-registrar" class="form-login__boton" type="button" value="Registrarse">
        </div>
      </form>

      <div class="login-registrar">
        <span clas="login-registrar-text">¿Ya tienes una cuenta?</span>
        <a href="#/login" class="login-registrar__text login-registrar__text--registro">Inicia Sesion</a>
      </div>
    </div>
  </div>`;

  // Creando la seccion que contendra al registro
  const sectionRegistro = document.createElement('section');
  sectionRegistro.innerHTML = registro;
  return sectionRegistro;
};
export const iteraciónDeRegistro = () => {
  const btnRegistrar = document.querySelector('#btn-registrar');
  console.log(btnRegistrar);
  // variables

  btnRegistrar.addEventListener('click', () => {
    // e.preventDefault();
    // const usernameInput = sectionRegistro.querySelector('.userName').value;
    const emailInput = document.querySelector('#userEmail').value;
    const passwordInput = document.querySelector('#userPassword').value;
    console.log(emailInput);
    console.log(passwordInput);
    // const confirmPasswordInput = sectionRegistro.querySelector('.userConfirmPassword').value;
    register(emailInput, passwordInput)
      .then((userCredential) => {
        // Signed in
        console.log(userCredential);
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
