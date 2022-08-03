// Importamos los componentes que pondremos en las rutas
import { homeView } from './home.js';
import { loginview } from './login.js';
import { registroview, iteraciónDeRegistro } from './registro.js';

const components = {
  home: homeView,
  login: loginview,
  registro: registroview,
  iteraciónRegistro: iteraciónDeRegistro,
};

export { components };
