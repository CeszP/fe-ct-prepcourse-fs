function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  const nuevoArray = array.map(elemento => {return elemento.toUpperCase()})
  return nuevoArray
}

module.exports = convertirStringAMayusculas;
