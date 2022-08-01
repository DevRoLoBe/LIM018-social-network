export const registroview = () => {
  const registro = `
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

      <div class="check-text">
        <div class="check-content">
          <input type="checkbox" id="check-content__input" >
          <labelfor="check-content__input" class="check-content__label"> Recordarme</label>
        </div>
        <a href="#" class="check-text__link">¿Olvidaste tu contraseña?</a>
      </div>

      <div class="input-field button">
        <input type="button" value="Registrarse">
      </div>
    </form>

    <div class="login-registrar">
      <span clas="login-registrar-text">¿Ya tienes una cuenta?</span>
      <a href="#" class="login-registrar-text login-registrar__text--login">Inicia Sesión</a>
    </div>
  </div>`;
  // Creando la seccion que contendra al registro
  const sectionRegistro = document.createElement('section');
  sectionRegistro.innerHTML = registro;
  return sectionRegistro;
};
