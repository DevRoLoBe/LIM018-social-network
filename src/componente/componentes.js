// Importamos los componentes que pondremos en las rutas
import { homeView } from './home.js';
import { loginview, loginDom } from './login.js';
import { registroview, registroDom } from './registro.js';

const components = {
  home: homeView,
  login: loginview,
  loginF: loginDom,
  registro: registroview,
  registroF: registroDom,

};

export { components };
