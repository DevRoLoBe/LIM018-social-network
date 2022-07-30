export const loginview = () => {
  const login = `
  template---<<<<
  --aqui va todo lo de login imagen y titulo, boton de iniciar seseion con goolge y registro--
      <input type="email">  
      <input type="password">`;
  const divElement = document.createElement('div');
  divElement.innerHTML = login;
  return divElement;
};
