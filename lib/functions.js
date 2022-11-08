const process = require('process');
const path = require('path')
  
// Printing process.argv property value
const pathTerminal = process.argv[2]
//Resolviendo la validación de la ruta
const resolvePath = path.resolve(pathTerminal)
console.log('Mi ruta a utilizar es: ', resolvePath);

//Creando la función recursiva
function juntarRutasDeMds(myPath) {
    let arrayMds = []

    return arrayMds
}
console.log(juntarRutasDeMds(resolvePath))