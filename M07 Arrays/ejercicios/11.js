function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
  const nuevoArray = array.map(el =>{ return el*array.indexOf(el) })
  return nuevoArray
}

module.exports = multiplicarElementosPorIndice;
