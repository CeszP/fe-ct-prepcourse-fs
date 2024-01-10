function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  const res = []
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 == 0){
      res.push(array[i])
    }
  }
  return res  
}

module.exports = filtrarNumerosPares;
