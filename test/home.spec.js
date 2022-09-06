import { homeView } from '../src/componente/home.js';

jest.mock('../src/firebaseconfig/firebase.js');

describe('Home', () => {
  it('se pinte nuestro home', () => {
    const mainR = document.createElement('main');
    mainR.id = 'contenedor';
    document.body.appendChild(mainR);

    mainR.replaceChildren(homeView());

    expect(document.querySelector('.seccionPrincipal .header')).not.toBeNull();
    expect(document.querySelector('.seccionPrincipal .secc-perfilName')).not.toBeNull();
    expect(document.querySelector('.seccionPrincipal .secc-publicacionFoto')).not.toBeNull();
    expect(document.querySelector('.seccionPrincipal .container-modal')).not.toBeNull();
    expect(document.querySelector('.seccionPrincipal .menu')).not.toBeNull();
  });
});
