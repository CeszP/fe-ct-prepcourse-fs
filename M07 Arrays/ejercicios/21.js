function encontrarPrimerMultiploDeN(n, secuencia) {
  // La función recibe un numero "n" y un array de números "secuencia" como argumentos.
  // Devuelve el primer múltiplo de n que encuentres en la secuencia de números.
  // Usa un break para detener el bucle una vez halles el múltiplo.
  // Tu código:
  return secuencia.filter(elemento => elemento % n == 0).shift()
}
// encontrarPrimerMultiploDeN(2,[2, 4, 6, 8, 10])
module.exports = encontrarPrimerMultiploDeN;