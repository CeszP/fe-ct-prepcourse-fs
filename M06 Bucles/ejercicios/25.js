function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:
  let palindromo = string.split('').reverse().join('').replace(/\s+/g, '').toLowerCase()
  let stringSinEspacios = string.trim().replace(/\s+/g, '').toLowerCase()
  
  if(palindromo === stringSinEspacios){
    return true
  }
  return false

}
module.exports = esPalindromo;
