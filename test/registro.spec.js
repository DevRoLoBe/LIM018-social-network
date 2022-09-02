import { registroview } from '../src/componente/registro.js';

jest.mock('../src/firebaseconfig/firebase.js');

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

  // it('dar click al boton registro', () => {
  //   document.body.appendChild(registroview());
  //   const btnRegistrar = document.getElementById('btn-registrar');
  //   expect(btnRegistrar instanceof HTMLElement).toBe(true);
  //   btnRegistrar.click();
  //   console.log(window.location);
  // });
});
