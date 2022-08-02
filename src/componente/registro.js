export const registroview = () => {
  const registro = `
  <div class="form">
    <div class="form-registro">
      <figure class="logo">
        <img class="logo__registro" src="imagenes/titulo.png" class="logo hidden" alt="perro y gato abrazadose">
      </figure>
      <form action="#">
        <div class="input-field">
          <input type="text" placeholder="Ingresar nombre" required>
          <i class="uil uil-user"></i>
        </div>
        <div class="input-field">
          <input type="text" placeholder="Ingresar email" required>
          <i class="uil uil-envelope icon"></i>
        </div>
        <div class="input-field">
          <input type="password" class="password" placeholder="Ingresar contraseña" required>
          <i class="uil uil-lock icon"></i>
        </div>
        <div class="input-field">
          <input type="password" class="password" placeholder="Confirmar contraseña" required>
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