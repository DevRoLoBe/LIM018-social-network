import { components } from '../componente/componentes.js';

const changeView = (route) => {
  const container = document.querySelector('.container');
  
  container.innerHTML = '';
  switch (route) {
    case '':
    case '#/login':
    {
      return container.appendChild(components.login());
    }
    case '#/':
    {
      return container.appendChild(components.login());
    }
    case '#/Iconos':
    {
      return container.appendChild(components.iconos());
    }

    default:
      break;
  }

  console.log(route);
};

export { changeView };
