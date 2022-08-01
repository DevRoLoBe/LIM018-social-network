// Importamos los componentes que pondremos en las rutas
import { homeView } from './home.js';
import { loginview } from './login.js';
import { registroview } from './registro.js';

const components = {
  home: homeView,
  login: loginview,
  registro: registroview,
};

export { components };
