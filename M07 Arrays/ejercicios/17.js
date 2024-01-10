function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let res = []
  for(let e = 0; e <= 10; e++){
    res.push(6*e)
  }
   return res
}

module.exports = tablaDelSeis;
