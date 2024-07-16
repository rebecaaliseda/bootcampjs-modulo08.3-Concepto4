export const generarNumeroAleatorio = (idArray: number) =>
  Math.floor(Math.random() * (idArray + 1));

export const barajarCartas = (arrayAnimales: string[]): string[] => {
  for (let id = arrayAnimales.length - 1; id > 0; id--) {
    let idArrayAleatorio = generarNumeroAleatorio(id);
    [arrayAnimales[id], arrayAnimales[idArrayAleatorio]] = [
      arrayAnimales[idArrayAleatorio],
      arrayAnimales[id],
    ];
  }
  return arrayAnimales;
};
