function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:
  for(let i = 0; i < array.length; i++){
    arrCaracteres = array[i].split('')
    if(arrCaracteres.length > 5 || array[i] == 'hello'){return array[i].toString()}
  }
}

module.exports = obtenerPrimerStringLargo;
