import { arrayAnimales } from './modelo';
import { barajarCartas } from './motor';
import { mostrarCartaAnimal } from './ui';

document.addEventListener('DOMContentLoaded', () => {
  console.log(barajarCartas(arrayAnimales));
  console.log(barajarCartas(arrayAnimales));
  console.log(barajarCartas(arrayAnimales));
  console.log(barajarCartas(arrayAnimales));
  console.log(barajarCartas(arrayAnimales));
  console.log(barajarCartas(arrayAnimales));
});

document.addEventListener('DOMContentLoaded', mostrarCartaAnimal);
