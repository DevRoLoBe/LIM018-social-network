export default () => {
  const viewHome = ` aqui va pantalla principal
    <h2 class="text-center">¡Bienvenido + usuario!</h2>
    <figure class="text-center">
    <img class="img" src="/imgenes/perroAzul.png" alt="perro y gato abrazandose">
    </figure> `;
  const divElement = document.createElement('div');
  divElement.innerHTML = viewHome;

  return divElement;
};
