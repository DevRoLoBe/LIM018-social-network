/**
 * @jest-environment jsdom
 */
// Esta instruciion le dice a jest que cree el objeto document

// importamos la funcion que vamos a testear
// import { registroFirebase, registroDom } from '../src/componente/registro.js';
import { loginview, loginDom } from '../src/componente/login.js';
import { registroview } from '../src/componente/registro.js';

jest.mock('../src/firebaseconfig/firebase.js'); // Modulo a mockear

// Inicio de codigo D
// describe('registro', () => {
//   it('se pinte el formulario de registro', () => {
//     const mainH = document.createElement('main');
//     mainH.id = 'contenedor';
//     document.body.append(mainH);
//     const objetoH = {
//       registro: 'registroview',
//       registroF: 'registroDom',
//     };
//     // divsito.appendChild(components.registro()); components.registroF();
//     mainH.append(objetoH.registro);
//     console.log(document.querySelector('.form.register'));
//     console.log(document.body.innerHTML);
//     expect(document.querySelector('.form.register')).not.toBeNull();
//   });
// });
// Fin del codigo
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

  it.only('hacer un login exitoso', () => {
    // DADO - mocks, pintar en el dom que necesitemos, agregamos los eventos necesarios
    const loginSection = loginview();
    document.body.appendChild(loginSection);
    loginDom();

    // CUANDO - ejecutar una funcion especifica para nuestra prueba
    document.querySelector('#btn-login').click();
    console.log('chaoooooooo');

    // ENTONCES - los resultados esperados | expects
    expect(window.location.hash).toBe('#/home');
  });
});

describe('registro', () => {
  it('se pinte nuestro formulario de registro', () => {
    // DADO
    const mainR = document.createElement('main');
    document.body.appendChild(mainR);
    mainR.appendChild(registroview());
    // CUANDO - ejecutar una funcion especifica para nuestra prueba

    // ENTONCES
    expect(document.querySelector('.form.register')).not.toBeNull();
  });

  it('dar click al boton registro', () => {
    document.body.appendChild(registroview());
    const btnRegistrar = document.getElementById('btn-registrar');
    expect(btnRegistrar instanceof HTMLElement).toBe(true);
    btnRegistrar.click();
    console.log(window.location);
  });
});
