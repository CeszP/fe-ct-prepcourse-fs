function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:
 const nFecha = new Date(fecha)
 if(fecha instanceof Date && !isNaN(nFecha.getTime())){return true }
 return false
}
module.exports = esFechaValida;