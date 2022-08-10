// importamos la funcion que vamos a testear
import { registroFirebase, registroDom } from '../src/componente/registro.js';

describe('myFunction', () => {
  it('debería ser una función', () => {
    expect(typeof registroFirebase).toBe('function');
  });
});
describe('registroDom', () => {
  it('debería ser una función', () => {
    expect(typeof registroDom).toBe('function');
  });
});
