const process = require('process');
const path = require('path')
const fs = require('fs')
const marked = require('marked')
const fetch = require('node-fetch')

// Printing process.argv property value
const pathTerminal = process.argv[2]

//Resolviendo la validación de la ruta
//const resolvePath = path.resolve(pathTerminal)

const validatePath = (myPath) => {
    //Si la ruta es relativa la vuelve absoluta
    let route
    if (path.isAbsolute(myPath)) {
        return route = myPath
    } else {
        return route = path.resolve(myPath)
    }
}
//module.exports = { validatePath }

//Creando la función leer directorios


const readDirectory = (myPath) => {
    console.log('123456', myPath)
    let arrayMds = []
    if (path.extname(myPath) == "") {
        let directory = [];
        // readdir muestra los archivos que estan en el path (arroja un array)
        directory = fs.readdirSync(myPath)
        directory.forEach(file => {
            file = path.join(myPath, file)
            if (path.extname(file) == "") {
                arrayMds = arrayMds.concat(readDirectory(file))
            } else if (path.extname(file) == ".md") {
                arrayMds.push(file);
            }
        })
    } else if (path.extname(myPath) == ".md") {
        arrayMds.push(myPath)
    }
    return arrayMds
}

//module.exports = { readDirectory }


// Validando los links

const validateLinks = (arrayLinks) => {
    return Promise.all(arrayLinks.map(component => {
        return fetch(component.href).then(response => {
            component.status = response.status
            if (response.status >= 200 && response.status < 400) {
                component.ok = response.statusText
            } else {
                component.ok = "Fail"
            }
            return component
        })
        //.catch(error => console.error('Error:', error))
    }))
}
//module.exports = { validateLinks }

//Aquí están los stats

const statsLinks = (arrayPrueba) => {
    const broken = arrayPrueba.filter(link => link.ok === 'Fail').length
    const individualLinks = []
    arrayPrueba.forEach(link => individualLinks.push(link.href));
    return {
        total: arrayPrueba.length,
        unique: new Set(individualLinks).size,
        broken: broken
    }
}
const prueba = (path) => {
    return 'hola' + path
}
//module.exports = { statsLinks }; 
module.exports = {
    statsLinks,
    readDirectory,
    validateLinks,
    prueba
}