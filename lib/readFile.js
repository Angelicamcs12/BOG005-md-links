const fs = require('fs');
const { resolve } = require('path');
const marked = require('marked')

function readFile(fileMD) {
    let links = [];
    return new Promise((resolve, reject) => {
        fs.readFile(fileMD, 'utf-8', (error, data) => {
            if (!error) {

                const renderer = new marked.Renderer();

                renderer.link = function (href, title, text) {
                    const bringObject = {
                        'file': fileMD,
                        'href': href,
                        'text': text,
                    }
                    links.push(bringObject)
                    
                }
                marked.marked(data, { renderer });
            }
            else (
                //console.log('ingresooooo', error);
                reject('error')
            )
            resolve(links);
        })
    })
}
module.exports = { readFile }

//readFile('/Users/aeternum/Documents/Laboratoria/BOG005-md-links/lib/Pruebas/prueba4.md').then(res => console.log(res))
/* 
function readAllFiles (arrayFiles){
    let arrayPromesas = []
    arrayPromesas = arrayFiles.map((fileMD) => {
        return Promise.all(fileMD).then(res => console.log(res))
    })
    console.log(arrayPromesas)
    return arrayPromesas
}
readAllFiles(['']) */

const readAllFiles = (arrayFiles) => {

    let arrayPromesas = arrayFiles.map(file => readFile(file))

    return Promise.all(arrayPromesas).then(res => res.flat())
}
module.exports = { readAllFiles }; 