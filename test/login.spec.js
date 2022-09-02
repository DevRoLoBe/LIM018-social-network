// Esta instruciion le dice a jest que cree el objeto document

// importamos la funcion que vamos a testear
// import { registroFirebase, registroDom } from '../src/componente/registro.js';
import { loginview, loginDom } from '../src/componente/login.js';

jest.mock('../src/firebaseconfig/firebase.js'); // Modulo a mockear

describe('login', () => {
  it('se pinte el formulario de login', () => {
    // DADO - mocks, pintar en el dom que necesitemos
    const mainH = document.createElement('main');
    mainH.id = 'contenedor';
    document.body.appendChild(mainH);

    // CUANDO - ejecutar una funcion especifica para nuestra prueba
    mainH.appendChild(loginview());

    // ENTONCES - los resultados esperados | expects
    expect(document.querySelector('.form.login')).not.toBeNull();
  });

  it('hacer un login exitoso', () => {
    // DADO - mocks, pintar en el dom que necesitemos, agregamos los eventos necesarios
    const loginSection = loginview();
    document.body.appendChild(loginSection);
    loginDom();

    const gmailInput = document.querySelector('#userGmail');
    const passwordInput = document.querySelector('#userPassword');
    gmailInput.value = 'email@gmail.com';
    passwordInput.value = '123456';
    // CUANDO - ejecutar una funcion especifica para nuestra prueba
    document.querySelector('#btn-login').click();

    // ENTONCES - los resultados esperados | expects
    setTimeout(() => {
      expect(window.location.hash).toBe('#/home');
    }, 1000);
  });

  it('deberia arrojar email incorrecto', () => {
    const gmailInput = document.querySelector('#userGmail');
    gmailInput.value = 'noexist@gmail.com';

    document.querySelector('#btn-login').click();
    const alertGmail = document.querySelector('#alertgmail');
    setTimeout(() => {
      expect(alertGmail.textContent).toBe('Email incorrecto');
    }, 1000);
  });

  it('deberia arrojar contraseña', () => {
    const gmailInput = document.querySelector('#userGmail');
    gmailInput.value = 'noexist@gmail.com';

    document.querySelector('#btn-login').click();
    const alertGmail = document.querySelector('#alertgmail');
    setTimeout(() => {
      expect(alertGmail.textContent).toBe('Email incorrecto');
    }, 1000);
  });
});
