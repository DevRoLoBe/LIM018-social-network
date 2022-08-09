import { components } from '../componente/componentes.js';

// Sirve para cambiar de vistas
const changeView = (route) => {
  // Creamos variable del contenedor general
  const container = document.querySelector('#contenedor');
  // Limpia la pantalla
  container.innerHTML = '';
  // Asignando los componentes a las rutas
  switch (route) {
    case '':
    case '#/login':
    {
      container.appendChild(components.login()); components.loginF();
      break;
    }
    case '#/registro':
    {
      container.appendChild(components.registro()); components.registroF();
      break;
    }
    case '#/home':
    {
      return container.appendChild(components.home());
    }
    case '#/profile':
    {
      return container.appendChild(components.profile());
    }
    default:
      break;
  }

  return route;
};

export { changeView };
