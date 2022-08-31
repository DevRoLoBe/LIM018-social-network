/**
 * @jest-environment jsdom
 */
// Esta instruciion le dice a jest que cree el objeto document

// importamos la funcion que vamos a testear
// import { registroFirebase, registroDom } from '../src/componente/registro.js';
import { loginview } from '../src/componente/login.js';
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

describe('registro', () => {
  it('dar click al boton registro', () => {
    document.body.appendChild(registroview());
    const btnRegistrar = document.getElementById('btn-registrar');
    expect(btnRegistrar instanceof HTMLElement).toBe(true);
    btnRegistrar.click();
    console.log(window.location);
  });
});
describe('Login', () => {
  it('dar click al boton login', () => {
    document.body.appendChild(loginview());
    const btnLogin = document.getElementById('btn-login');
    expect(btnLogin instanceof HTMLElement).toBe(true);
    btnLogin.click();
  });
});
