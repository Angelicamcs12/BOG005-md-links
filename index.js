const { validateLinks, readDirectory, prueba } = require('./lib/functions.js');
const { readAllFiles } = require('./lib/readFile');
const marked = require('marked')
const path = require('path')


// mdLinks debe tener 2 argumentos, path y options
// La función debe retornar una promesa (Promise) que resuelva a un arreglo (Array) de objetos (Object)
// donde cada objeto representa un link y contiene las siguientes propiedades

// option es un objeto con 2 propiedades
// validate: Booleano que determina si se desea validar los links encontrados.
//     si es true: href, text, file, status, ok
//     si es False: href, text, file
// stats: Booleano que determina si s


// Printing process.argv property value
const pathTerminal = process.argv[2]

const mdLinks = (myPath, options = { validate: false }) => {
  //Resolviendo la validación de la ruta
  const resolvePath = path.resolve(myPath)
  // console.log('si está =>>>>>>>>>>>>><<', prueba(resolvePath))
  const arrayMD = readDirectory(resolvePath)
  return new Promise((resolve, reject) => {
    if (options.validate === true) {
      readAllFiles(arrayMD)
        .then(res => validateLinks(res))
        .then(resValidate => resolve(resValidate))
    } else {
      readAllFiles(arrayMD).then(res => resolve(res))
    }

  })
}

// mdLinks(pathTerminal).then(res => console.log('resultado fn mdlinks: ', res))
module.exports = { mdLinks }

//catch(error => {reject(error)})
/* module.exports = () => {
  // ...
}; */
