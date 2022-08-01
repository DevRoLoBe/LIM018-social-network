import { components } from '../componente/componentes.js';

// Sirve para cambiar de vistas
const changeView = (route) => {
  // Creamos variable del contenedor general
  const container = document.querySelector('.container');
  // Limpia la pantalla
  container.innerHTML = '';
  // Asignando los componentes a las rutas
  switch (route) {
    case '':
    case '#/login':
    {
      return container.appendChild(components.login());
    }
    case '#/registro':
    {
      return container.appendChild(components.registro());
    }
    case '#/home':
    {
      return container.appendChild(components.home());
    }
    default:
      break;
  }

  return route;
};

export { changeView };
