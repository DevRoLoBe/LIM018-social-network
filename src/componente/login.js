export const loginview = () => {
  const login = /*Html*/
  `<div class="container">
    <div class="forms">
      <div class="form login">
        <!--<figure class="logo">
          <img class="logo__login" src="imagenes/loginCompleto.png" class="logo hidden" alt="perro y gato abrazadose">
        </figure>-->
        <span class="form-title">Login</span>
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
            <a href="#" class="text">¿Olvidaste tu contraseña?</a>
          <div class="campo-entrada campo-entrada__boton">
            <input type="button" value="Iniciar Sesión">
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
