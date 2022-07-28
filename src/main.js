import { changeView } from './viewControler/rutas.js';

const init = () => {
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};
window.addEventListener('load', init);

changeView(window.location.hash);

// sirve solo para cargar mis rutas