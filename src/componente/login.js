export const loginview = () => {
  const login = /*html*/
  `
  <div class="form">
    <div class="form-login">
      <figure class="logo">
        <img class="logo__login" src="imagenes/loginCompleto.png" class="logo hidden" alt="perro y gato abrazadose">
      </figure>
      <form action="#">
        <div class="campo-entrada">
          <input type="text" placeholder="Ingresar email" required>
          <i class="uil uil-envelope icon"></i>
        </div>
        <div class="campo-entrada">
          <input type="password" class="password" placeholder="Ingresar contraseña" required>
          <i class="uil uil-lock icon"></i>
          <i class="uil uil-eye-slash showHidePw"></i>
        </div>

        <div class="check-remenber">
          <div class="check-content">
            <input type="checkbox" id="check-content__input">
            <label for="check-content__input" class="check-content__text">Recordarme</label>
          </div>
          <a href="#" class="check-content__text">¿Olvidaste tu contraseña?</a>
        </div>

        <div class="campo-entrada campo-entrada__boton">
          <input class="form-login__boton" type="button" value="Iniciar Sesión">
        </div>
      </form>

      <div class="login-registrar">
        <span clas="login-registrar-text">¿No tiene una cuenta?</span>
        <a href="#/registro" class="login-registrar__text login-registrar__text--registro">Registrate</a>
      </div>
    </div>
  </div>`;

  const sectionLogin = document.createElement('section');
  sectionLogin.innerHTML = login;
  return sectionLogin;
};
