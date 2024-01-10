function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:
  if (numeros.length < 1) {
    return null;
  }

  let sumaEsperada = 0;
  for (let i = numeros[0]; i <= Math.max(...numeros); i++) {
      sumaEsperada += i;
  }

  let sumaReal = numeros.reduce((acc, num) => acc + num, 0);

  return sumaReal === sumaEsperada ? null : sumaEsperada - sumaReal;

}

module.exports = encontrarNumeroFaltante;