function contarParesConContinue(numeros) {
  // La función recibe un array de numeros por argumento.
  // Devuelve la cantidad de números pares que hay en el array.
  // Evita los impares utilizando continue.
  // Tu código:
  let cuenta = 0
  return cuenta = numeros.filter(elemento => {return elemento % 2 == 0}).length
}

module.exports = contarParesConContinue;
