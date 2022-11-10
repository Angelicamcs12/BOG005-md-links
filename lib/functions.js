const process = require('process');
const path = require('path')
const fs = require('fs')
  
// Printing process.argv property value
const pathTerminal = process.argv[2]
//Resolviendo la validación de la ruta
const resolvePath = path.resolve(pathTerminal)
console.log('Mi ruta a utilizar es: ', resolvePath);

//Creando la función recursiva
let arrayMds = []

const readDirectory = (myPath) => {
    if (path.extname(myPath) == "") {
        let directory = [];
// readdir muestro los archivos que estan en el path (arroja un array)
        directory = fs.readdirSync(myPath)
        directory.forEach(file => {
            file = path.join(myPath, file)
            if (path.extname(file) == ""){
                readDirectory(file)
            } else if (path.extname(file) == ".md") {
                arrayMds.push(file);
            }
        })
    } else if (path.extname(myPath) == ".md") {
        arrayMds.push(myPath)
    }
    return arrayMds
}
console.log(readDirectory(resolvePath))
