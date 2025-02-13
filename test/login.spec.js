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
    document.body.replaceChildren(loginSection);
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
    document.body.replaceChildren(loginview());
    loginDom();
    const gmailInput = document.querySelector('#userGmail');
    gmailInput.value = 'noexist@gmail.com';

    document.querySelector('#btn-login').click();
    const alertGmail = document.querySelector('#alertgmail');
    setTimeout(() => {
      expect(alertGmail.textContent).toBe('Email incorrecto');
    }, 0);
  });

  it('deberia arrojar contraseña incorrecta', () => {
    document.body.replaceChildren(loginview());
    loginDom();
    const gmailInput = document.querySelector('#userGmail');
    gmailInput.value = 'wrongpas@gmail.com';

    document.querySelector('#btn-login').click();
    const alertPassword = document.querySelector('#alertpassword');
    setTimeout(() => {
      expect(alertPassword.textContent).toBe('Contraseña incorrecta');
    }, 0);
  });

  it('deberia arrojar usuario deshabilitado', () => {
    document.body.replaceChildren(loginview());
    loginDom();
    const gmailInput = document.querySelector('#userGmail');
    gmailInput.value = 'disabled@gmail.com';

    document.querySelector('#btn-login').click();
    const alertGmail = document.querySelector('#alertgmail');
    setTimeout(() => {
      expect(alertGmail.textContent).toBe('Usuario deshabilitado');
    }, 0);
  });
  it('Verificar la existencia del boton de google ', () => {
    const mainH = document.createElement('main');
    mainH.id = 'contenedor';
    document.body.appendChild(mainH);
    mainH.replaceChildren(loginview());
    loginDom();
    const btnGoogle = document.querySelector('#btn-google');
    expect(btnGoogle instanceof HTMLElement).toBe(true);
  });
});
