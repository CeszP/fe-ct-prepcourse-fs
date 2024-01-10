function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  if(array.length < 1){return 0}
  let mayor = Math.max(...array)
  return array.indexOf(mayor)
}

module.exports = encontrarIndiceMayor;
