function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
  let res = 0
  for(const el of arrayOfNums){res += el}
  return res
}

module.exports = agregarNumeros;
