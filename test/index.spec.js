/**
 * @jest-environment jsdom
 */

// importamos la funcion que vamos a testear
// import { registroFirebase, registroDom } from '../src/componente/registro.js';
import { registroview } from '../src/componente/registro.js';
jest.mock("../src/firebaseconfig/firebase.js");

// Codigo hecho con David
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

// describe('myFunction', () => {
//   it('debería ser una función', () => {
//     expect(typeof registroFirebase).toBe('function');
//   });
// });
describe('registro', () => {
  it('dar click al boton registro', () => {
    document.body.append(registroview());
    const btnRegistrar = document.querySelector('#btn-registrar');
    btnRegistrar.click();
  });
});
