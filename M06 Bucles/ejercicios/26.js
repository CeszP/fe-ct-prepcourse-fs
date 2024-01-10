function esAnagrama(str1, str2) {
  // La función recibe dos argumentos "str1" y "str2" que son strings.
  // Determina si los dos strings son anagramas.
  // Devuelve true de ser así, sino retorna false.
  // IMPORTANTE: Un anagrama es una palabra que se forma
  // con las mismas letras que otra, pero en orden diferente.
  // Tu código:
  const limpiarString = (str) => str.replace(/\s/g,'').toLowerCase()

  const strOrdenado1 = limpiarString(str1).split('').sort().join('')
  const strOrdenado2 = limpiarString(str2).split('').sort().join('')

  return strOrdenado1 == strOrdenado2

}
module.exports = esAnagrama;
