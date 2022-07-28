export const registroview = () => {
  const registro = `
    template---<<<asi se llama todo esto html en js<
    --aqui va todo lo de login imagen y titulo, botones y registro--
        <input type="email">  
        <input type="password">`;
  const divElement = document.createElement('div');
  divElement.innerHTML = registro;
  return divElement;
};
