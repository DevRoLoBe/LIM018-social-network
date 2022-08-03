export const registroview = () => {
  const registro = `
  <div class="form">
    <div class="form-registro">
      <figure class="logo">
        <img class="logo__registro" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
      </figure>
      <form id="form-registro">
        <div class="campo-entrada">
          <input type="text" placeholder="Ingresar nombre" required id="username">
          <i class="uil uil-user"></i>
        </div>
        <div class="campo-entrada">
          <input type="text" placeholder="Ingresar email" required id="email">
          <i class="uil uil-envelope icon"></i>
        </div>
        <div class="campo-entrada">
          <input type="password" class="password" placeholder="Ingresar contraseña" required id="password">
          <i class="uil uil-lock icon"></i>
        </div>
        <div class="campo-entrada">
          <input type="password" class="password" placeholder="Confirmar contraseña" required id="confirmP">
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
export const registroDom = () => {
  // declarando variables
  // const form = document.querySelector('#form-registro');
  // form.addEventListener('submit', (e) => {
  //   e.preventDefault();
  // const username = document.querySelector('#username');
  const email = document.querySelector('#email');
  const password = document.querySelector('#password');
  // const confirmP = document.querySelector('#confirmP');
  //   console.log(username, email,password,confirmP);
  // });
  const btnRegistrar = document.querySelector('#btn-registrar');
  btnRegistrar.addEventListener('click', () => {
    console.log(email.value);
    console.log(password.value);
  });
};
