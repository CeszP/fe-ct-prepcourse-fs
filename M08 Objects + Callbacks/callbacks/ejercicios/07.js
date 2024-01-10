function filter(arrayOfStrings) {
  // Debes identificar todos los elementos el arreglo que comiencen con la letra "a".
  // Luego retorna un nuevo arreglo con estos elementos.
  // Tu código:
  let arra = []
  for(element of arrayOfStrings){
    let sub = element.split('')
    if(sub[0] == 'a'){
      arra.push(element)
    }
  }
  return arra
}

module.exports = filter;
