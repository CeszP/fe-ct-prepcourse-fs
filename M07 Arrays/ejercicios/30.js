function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:
  const elementosVistos = {}
  for(const numero of numeros){
    if(elementosVistos[numero] !== undefined){
      return numero
    }
    elementosVistos[numero] = true
  }
  return undefined
}

module.exports = encontrarElementoRepetido;