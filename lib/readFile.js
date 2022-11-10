const fs = require('fs');
const { resolve } = require('path');

const readingFile = (arrayFile) =>{
    let content = new Promise((resolve, reject) => {
        let files = arrayFile.map(objectFile =>{
            let links = [];
            return new Promise ((resolve, reject))
        })
    })
}

function readFile (fileMD){
   return new Promise ((resolve, reject) => {
    fs.readFile(fileMD, 'utf-8', (error, data) =>{
        if (!error) {
            resolve (data);
        } else {
            console.log(error);
        }
    })
   })
}

//readFile('/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/prueba4.md').then(res => console.log(res))

function readAllFiles (arrayFiles){
    let arrayPromesas = []
    arrayPromesas = arrayFiles.map((fileMD) => {
        return readFile(fileMD)
    })
    console.log(arrayPromesas)
    return arrayPromesas
}
readAllFiles(['/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/filePrueba/holamundo.md',
'/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/filePrueba/holamundo2.md',
'/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/prueba3.md',
'/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/prueba4.md'])
