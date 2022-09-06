import { registroview, registroDom } from '../src/componente/registro.js';

jest.mock('../src/firebaseconfig/firebase.js');

describe('registro', () => {
  it('se pinte nuestro formulario de registro', () => {
    // DADO
    const mainR = document.createElement('main');
    document.body.appendChild(mainR);
    mainR.replaceChildren(registroview());
    // CUANDO - ejecutar una funcion especifica para nuestra prueba
    // ENTONCES
    expect(document.querySelector('.form.register')).not.toBeNull();
  });
  it('hacer un registro exitoso', () => {
    // DADO
    document.body.replaceChildren(registroview());
    registroDom();
    const btnRegistrar = document.querySelector('#btn-registrar');
    const emailInput = document.querySelector('#userEmail');
    const passwordInput = document.querySelector('#userPassword');
    emailInput.value = 'ander@gmail.com';
    passwordInput.value = '11111111';
    // CUANDO
    btnRegistrar.click();
    // ENTONCES
    setTimeout(() => {
      expect(window.location.hash).toBe('#/home');
    }, 0);
  });
  it('deberia arrojar que el usuario existe', () => {
    const emailInput = document.querySelector('#userEmail');
    emailInput.value = 'ander@gmail.com';
    document.querySelector('#btn-registrar').click();
    const alertEmail = document.querySelector('#alertEmail');
    setTimeout(() => {
      expect(alertEmail.textContent).toBe('Email existente, prueba con otro');
    }, 0);
  });
  it('deberia arrojar que la contraseña deber ser mayor a 5 caracteres', () => {
    const passwordInput = document.querySelector('#userPassword');
    passwordInput.value = '11111';
    document.querySelector('#btn-registrar').click();
    const alertPassword = document.querySelector('#alertPassword');
    setTimeout(() => {
      expect(alertPassword.textContent).toBe('La contraseña debe tener al menos 6 caracteres');
    }, 0);
  });
});
