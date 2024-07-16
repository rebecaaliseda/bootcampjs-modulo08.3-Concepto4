export const mostrarCartaAnimal = () => {
  const cartas: NodeListOf<HTMLElement> = document.querySelectorAll('.carta-container');
  const imagenes: NodeListOf<HTMLImageElement> = document.querySelectorAll('img');

  cartas.forEach((carta, numCarta) => {
    carta?.addEventListener('click', () => {
      imagenes[numCarta].classList.add('carta-levantada');
      imagenes[
        numCarta
      ].src = `https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/${
        numCarta + 1
      }.png`;

      const images = document.getElementsByClassName('carta-levantada');
      if (images.length === 2) {
        setTimeout(() => {
          const imgCartas = document.querySelectorAll('.carta-levantada');
          imgCartas.forEach((imagen) => {
            if (imagen instanceof HTMLImageElement) {
              imagen.classList.remove('carta-levantada');
              imagen.src = '';
            }
          });
        }, 500);
      }
    });
  });
};
