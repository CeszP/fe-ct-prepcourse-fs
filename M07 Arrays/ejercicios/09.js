function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:
  let res = array.filter(elemento => {return elemento > 10})
  return res.length
}
module.exports = contarElementosMayoresA10;